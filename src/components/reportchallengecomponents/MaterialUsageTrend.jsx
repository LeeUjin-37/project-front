import React, { useMemo, useState } from "react";
import * as S from "../../pages/reportandchallenge/style";

const WEEK_LABELS = ["월", "화", "수", "목", "금", "토", "일"];
const MONTH_LABELS = ["1주", "2주", "3주", "4주"];

const DEFAULT_WEEK_DATA = [
  { label: "월", used: 2.25, waste: 2.56 },
  { label: "화", used: 1.76, waste: 1.89 },
  { label: "수", used: 0.43, waste: 4.3 },
  { label: "목", used: 0.35, waste: 0.37 },
  { label: "금", used: 0.35, waste: 0.37 },
  { label: "토", used: 3.0, waste: 2.56 },
  { label: "일", used: 0.5, waste: 1.0 },
];

const DEFAULT_MONTH_DATA = [
  { label: "1주", used: 8.2, waste: 6.1 },
  { label: "2주", used: 6.7, waste: 5.4 },
  { label: "3주", used: 9.1, waste: 3.8 },
  { label: "4주", used: 7.4, waste: 4.6 },
];

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const MaterialUsageTrend = ({
  weeklyData = DEFAULT_WEEK_DATA,
  monthlyData = DEFAULT_MONTH_DATA,
  title = "재료 사용 추이",
}) => {
  const [mode, setMode] = useState("week"); // "week" | "month"
  const [tooltip, setTooltip] = useState({
    open: false,
    x: 0,
    y: 0,
    label: "",
    used: 0,
    waste: 0,
  });

  const labels = mode === "week" ? WEEK_LABELS : MONTH_LABELS;

  const data = useMemo(() => {
    const source = mode === "week" ? weeklyData : monthlyData;

    // label 기준으로 맵 만들고, labels 순서대로 재구성 (없으면 0으로)
    const map = new Map(source.map((d) => [d.label, d]));
    return labels.map(
      (label) => map.get(label) ?? { label, used: 0, waste: 0 }
    );
  }, [mode, weeklyData, monthlyData, labels]);

  const chartMeta = useMemo(() => {
    // 주간: 시안 고정
    if (mode === "week") {
      return { max: 4.5, steps: 9, tick: 0.5 };
    }

    // 월간: 데이터 기반 자동 + 예쁜 눈금
    const values = data.flatMap((d) => [d.used, d.waste]);
    const maxVal = Math.max(...values, 1);

    // max는 0.5 단위 올림
    const max = Math.ceil(maxVal / 0.5) * 0.5;

    // tick을 "예쁜 단위"로 선택 (0.5 / 1 / 2)
    const targetTicks = 6; // 대충 6칸 정도 보이게
    const rawTick = max / targetTicks;

    let tick = 0.5;
    if (rawTick > 0.5) tick = 1;
    if (rawTick > 1) tick = 2;

    const steps = Math.ceil(max / tick); // 0 포함 라인까지: steps+1

    return { max, steps, tick };
  }, [mode, data]);


  const formatTick = (v) => {
    if (Math.abs(v) < 1e-6) return "0";
    return mode === "week" ? v.toFixed(1) : String(Math.round(v));
  };

  // SVG 레이아웃
  const W = 980;
  const H = 320;
  const P = { l: 48, r: 24, t: 18, b: 54 };
  const innerW = W - P.l - P.r;
  const innerH = H - P.t - P.b;

  const groupCount = data.length;
  const groupGap = mode === "week" ? 34 : 56;
  const groupW =
    groupCount > 0
      ? (innerW - groupGap * (groupCount - 1)) / groupCount
      : innerW;

  const barW = clamp(groupW * 0.28, 16, 28);
  const barGap = 8;

  const yScale = (v) => P.t + (1 - v / chartMeta.max) * innerH;

  const handleEnter = (e, d) => {
    const rect = e.currentTarget.ownerSVGElement?.getBoundingClientRect();
    const svgRect = rect || { left: 0, top: 0 };
    const cx = e.clientX - svgRect.left;
    const cy = e.clientY - svgRect.top;

    setTooltip({
      open: true,
      x: cx,
      y: cy,
      label: d.label,
      used: d.used,
      waste: d.waste,
    });
  };

  const handleMove = (e) => {
    if (!tooltip.open) return;
    const rect = e.currentTarget.ownerSVGElement?.getBoundingClientRect();
    const svgRect = rect || { left: 0, top: 0 };
    const cx = e.clientX - svgRect.left;
    const cy = e.clientY - svgRect.top;
    setTooltip((t) => ({ ...t, x: cx, y: cy }));
  };

  const handleLeave = () => setTooltip((t) => ({ ...t, open: false }));

  // 토글 시 바 애니메이션 다시 재생되게 key 사용
  const motionKey = `bars-${mode}-${data.map((d) => `${d.used}-${d.waste}`).join("|")}`;

  return (
    <S.TrendSection>
      <S.TrendInner>
        <S.TrendHeader>
          <S.TrendTitle>{title}</S.TrendTitle>

          <S.TrendToggle role="tablist" aria-label="그래프 보기 전환">
            <S.TrendToggleBtn
              type="button"
              role="tab"
              aria-selected={mode === "week"}
              $active={mode === "week"}
              onClick={() => setMode("week")}
            >
              주간
            </S.TrendToggleBtn>
            <S.TrendToggleBtn
              type="button"
              role="tab"
              aria-selected={mode === "month"}
              $active={mode === "month"}
              onClick={() => setMode("month")}
            >
              월간
            </S.TrendToggleBtn>
          </S.TrendToggle>
        </S.TrendHeader>

        <S.TrendCard>
          <S.TrendSvgWrap>
            <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%">
              {/* grid */}
              {Array.from({ length: chartMeta.steps + 1 }).map((_, i) => {
                const v = chartMeta.tick * i;
                const y = yScale(v);
                return (
                  <g key={`grid-${i}`}>
                    <line
                      x1={P.l}
                      x2={W - P.r}
                      y1={y}
                      y2={y}
                      stroke="rgba(0,0,0,0.10)"
                      strokeDasharray="4 4"
                    />
                    {/* y label */}
                    <text
                      x={P.l - 12}
                      y={y + 4}
                      textAnchor="end"
                      fontSize="12"
                      fill="rgba(0,0,0,0.35)"
                    >
                      {formatTick(v)}
                    </text>
                  </g>
                );
              })}

              {/* bars */}
              <g key={motionKey}>
                {data.map((d, idx) => {
                  const gx = P.l + idx * (groupW + groupGap) + groupW / 2;
                  const usedX = gx - (barW + barGap / 2);
                  const wasteX = gx + barGap / 2;

                  const usedY = yScale(d.used);
                  const wasteY = yScale(d.waste);

                  const usedH = P.t + innerH - usedY;
                  const wasteH = P.t + innerH - wasteY;

                  return (
                    <g
                      key={d.label}
                      onMouseEnter={(e) => handleEnter(e, d)}
                      onMouseMove={handleMove}
                      onMouseLeave={handleLeave}
                      onTouchStart={(e) => {
                        const touch = e.touches?.[0];
                        if (!touch) return;
                        // 터치 위치 기반 툴팁
                        const rect = e.currentTarget.ownerSVGElement?.getBoundingClientRect();
                        const cx = touch.clientX - (rect?.left || 0);
                        const cy = touch.clientY - (rect?.top || 0);
                        setTooltip({
                          open: true,
                          x: cx,
                          y: cy,
                          label: d.label,
                          used: d.used,
                          waste: d.waste,
                        });
                      }}
                      onTouchEnd={() => setTooltip((t) => ({ ...t, open: false }))}
                      style={{ cursor: "default" }}
                    >
                      <rect
                        className="bar bar-used"
                        x={usedX}
                        y={usedY}
                        width={barW}
                        height={usedH}
                        rx="6"
                      />
                      <rect
                        className="bar bar-waste"
                        x={wasteX}
                        y={wasteY}
                        width={barW}
                        height={wasteH}
                        rx="6"
                      />

                      {/* x label */}
                      <text
                        x={gx}
                        y={H - 22}
                        textAnchor="middle"
                        fontSize="14"
                        fill="rgba(0,0,0,0.55)"
                      >
                        {d.label}
                      </text>

                      {/* small value labels */}
                      <text
                        x={usedX + barW / 2}
                        y={usedY - 8}
                        textAnchor="middle"
                        fontSize="12"
                        fill="rgba(0,0,0,0.35)"
                      >
                        {d.used}
                      </text>
                      <text
                        x={wasteX + barW / 2}
                        y={wasteY - 8}
                        textAnchor="middle"
                        fontSize="12"
                        fill="rgba(0,0,0,0.35)"
                      >
                        {d.waste}
                      </text>
                    </g>
                  );
                })}
              </g>

              {/* x-axis baseline */}
              <line
                x1={P.l}
                x2={W - P.r}
                y1={P.t + innerH}
                y2={P.t + innerH}
                stroke="rgba(0,0,0,0.10)"
              />
            </svg>

            {tooltip.open && (
              <S.TrendTooltip
                style={{
                  left: tooltip.x + 18,
                  top: tooltip.y - 10,
                }}
              >
                <S.TrendTooltipTitle>{tooltip.label}</S.TrendTooltipTitle>
                <S.TrendTooltipRow $tone="waste">
                  버린 재료 : <b>{tooltip.waste}</b>
                </S.TrendTooltipRow>
                <S.TrendTooltipRow $tone="used">
                  소비한 재료 : <b>{tooltip.used}</b>
                </S.TrendTooltipRow>
              </S.TrendTooltip>
            )}
          </S.TrendSvgWrap>

          <S.TrendLegend>
            <S.TrendLegendItem>
              <S.TrendLegendDot $tone="used" />
              소비한 재료
            </S.TrendLegendItem>
            <S.TrendLegendItem>
              <S.TrendLegendDot $tone="waste" />
              버린 재료
            </S.TrendLegendItem>
          </S.TrendLegend>
        </S.TrendCard>
      </S.TrendInner>
    </S.TrendSection>
  );
};

export default MaterialUsageTrend;
