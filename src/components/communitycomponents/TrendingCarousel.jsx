import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import * as S from "../../pages/community/style";
import PostCard from "./PostCard";
// useLayoutEffect: 레이아웃 계산을 화면 그리기 전에 수행하기 위해 사용
// useMemo: 불필요한 재생성 방지
// useRef: DOM 요소 참조
// useState: 상태 관리

// 슬라이드 전용
const GAP = 22; // 카드 사이 간격(피그마상 40px, 넘 넓어보여서 줄임)
const VISIBLE = 4; // 화면에 보이는 카드 수(사진 4장)

const TrendingCarousel = () => {
  // 더미 데이터(형태만) ㅡ 나중에 API로 교체
  const items = useMemo( // 렌더링마다 배열이 새로 만들어지지 않도록 고정
    () => Array.from({ length: 8 }, (_, i) => ({ id: i + 1 })),
    [],
  );

  // 슬라이더 뷰포트 DOM 요소를 참조하기 위한 ref
  // 실제 너비 측정을 위해 필요
  const viewportRef = useRef(null);

  // 뼈대용 인덱스 (나중에 translateX 계산에 사용)
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스, translateX 계산에 사용됨
  const [cardW, setCardW] = useState(0); // 계산된 카드 너비, 뷰포트 너비에 따라 동적으로 변경됨

  // 뷰포트 기준으로 카드 폭 계산 (4개 딱 맞게)
  useLayoutEffect(() => { // 브라우저 페인트 전에 계산을 끝내서 깜빡임(layout shift)을 막기 위해, useEffect는 화면 보여준 다음 처리하는데 useLayoutEffect는 화면 보여주기 전에 처리함. 횐경 세팅용 effect
    const viewportElement = viewportRef.current; // 실제 DOM 요소 접근
    if (!viewportElement) return;

    const updateCardWidth  = () => { // 카드 너비를 다시 계산하는 함수
      // 뷰포트 실제 너비 측정
      const viewportWidth = viewportElement.getBoundingClientRect().width;
      // 카드 4개 + GAP을 고려해 정확한 카드 너비 계산
      const width = (viewportWidth - GAP * (VISIBLE - 1)) / VISIBLE;
      // 계산된 카드 너비를 state에 저장
      setCardW(width);
    };

    // 첫 마운트 시 한 번 계산
    updateCardWidth();

    // 반응형 대비
    const resizeObserver = new ResizeObserver(updateCardWidth); // 크기 변화를 감시하는 객체
    resizeObserver.observe(viewportElement);

    return () => resizeObserver.disconnect(); // 컴포넌트 언마운트 시 observer 정리 (메모리 누수 방지)
  }, []); // 의존성 배열이 빈배열인 이유는? 컴포넌트가 처음 마운트될 때 한 번 실행하고 언마운트될 때 정리하려고

  // 최대 이동 가능한 인덱스 계산
  // 전체 카드 수 - 화면에 보이는 카드 수
  const maxIndex = Math.max(items.length - VISIBLE, 0);
  // 한 번 이동할 때 이동 거리(px)
  const step = cardW + GAP;

  const handlePrev = () => {
    // 이전 버튼 클릭 시 인덱스 감소
    // 0보다 작아지지 않도록 제한
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    // 다음 버튼 클릭 시 인덱스 증가
    // maxIndex를 넘지 않도록 제한
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <S.CarouselSection>
      <S.SectionHeader>
        <S.SectionTitle>인기 급상승! 연말 필수 요리 함께 해요</S.SectionTitle>
        <S.SectionDesc>연말 모임 다양한 미식 메뉴 도전해 보세요</S.SectionDesc>
      </S.SectionHeader>

      <S.CaroselBody>
        {/* 이전 버튼 */}
        <S.CarouselNavButton
          type="button"
          aria-label="이전"
          $direction="prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        />

        {/* 슬라이더 영역 */}
        <S.CarouselViewport ref={viewportRef}>
           {/* 트랙: 실제 이동하는 영역 */}
          <S.CarouselTrack
            style={{ transform: `translateX(-${currentIndex * step}px)` }}
            // currentIndex에 따라 왼쪽으로 이동
          >
            {items.map((item) => (
              <PostCard
                key={item.id}
                item={item}
                w={cardW}
                onClick={() => console.log("post click", item.id)}
                />
            ))}
          </S.CarouselTrack>
        </S.CarouselViewport>

        {/* 다음 버튼 */}
        <S.CarouselNavButton
          type="button"
          aria-label="다음"
          $direction="next"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          // 마지막 카드일 때 비활성화
        />
      </S.CaroselBody>
    </S.CarouselSection>
  );
};

export default TrendingCarousel;
