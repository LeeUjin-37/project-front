import React, { useEffect, useMemo, useRef, useState } from "react";
import * as S from "../../pages/reportandchallenge/style";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const WeeklyChallengeCard = ({
  weekLabel = "Week 51. 이번 주 챌린지",
  title = "임박 재료 5개 소비하기",
  desc = "유통기한이 임박한 재료를 활용해서 음식물 쓰레기를 줄여보세요!",
  trophyImg = "/assets/images/reportandchallenge/ico_trophy.png",
  current = 3,
  total = 5,
  rewardText = "+30XP",
  onClickReward = () => {},
}) => {
  const wrapRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [percentView, setPercentView] = useState(0);

  const percentTarget = useMemo(() => {
    if (!total) return 0;
    return Math.round((current / total) * 100);
  }, [current, total]);

  const leftCount = Math.max(total - current, 0);

  // 스크롤로 섹션 도달 시 애니메이션 시작
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 } // 카드가 35% 정도 보이면 시작
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // 퍼센트 카운트업
  useEffect(() => {
    if (!started) return;

    if (prefersReducedMotion()) {
      setPercentView(percentTarget);
      return;
    }

    const duration = 900; // ms
    const from = 0;
    const to = percentTarget;
    const start = performance.now();

    let raf = 0;
    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      const value = Math.round(from + (to - from) * eased);
      setPercentView(value);

      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, percentTarget]);

  return (
    <S.WeeklySection ref={wrapRef}>
      <S.WeeklyInner>
        <S.WeeklyTitle>이번 주 챌린지</S.WeeklyTitle>

        <S.WeeklyCard>
          <S.WeeklyLeft>
            <S.WeeklyTrophy src={trophyImg} alt="" aria-hidden="true" />

            <S.WeeklyText>
              <S.WeeklyWeek>{weekLabel}</S.WeeklyWeek>
              <S.WeeklyMainTitle>{title}</S.WeeklyMainTitle>
              <S.WeeklyWrap>
              <S.WeeklyDesc>{desc}</S.WeeklyDesc>

              <S.WeeklyProgressRow>
                <S.WeeklyProgressInfo>
                  앞으로 <b>{leftCount}</b>개 가 남았어요!
                </S.WeeklyProgressInfo>
              </S.WeeklyProgressRow>
              </S.WeeklyWrap>

              <S.WeeklyBarTrack>
                <S.WeeklyBarFill
                  $started={started}
                  style={{ width: `${started ? percentTarget : 0}%` }}
                  aria-hidden="true"
                />
              </S.WeeklyBarTrack>

              <S.WeeklyBottomRow>
                <S.WeeklyBottomLeft>
                  현재 진행률 : <b>{current}</b> / {total}
                </S.WeeklyBottomLeft>
                <S.WeeklyBottomRight>{percentView}%</S.WeeklyBottomRight>
              </S.WeeklyBottomRow>
            </S.WeeklyText>
          </S.WeeklyLeft>

          <S.WeeklyRewardBtn type="button" onClick={onClickReward}>
            <span>{rewardText}</span>
            <S.WeeklyChevron aria-hidden="true">›</S.WeeklyChevron>
          </S.WeeklyRewardBtn>
        </S.WeeklyCard>
      </S.WeeklyInner>
    </S.WeeklySection>
  );
};

export default WeeklyChallengeCard;
