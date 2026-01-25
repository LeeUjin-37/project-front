import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import * as S from "../../pages/community/style";

const GAP = 22; // 카드 사이 간격(피그마상 40px, 넘 넓어보여서 줄임)
const VISIBLE = 4; // 화면에 보이는 카드 수(사진 4장)

const TrendingCarousel = () => {
  // 더미 데이터(형태만) ㅡ 나중에 API로 교체
  const items = useMemo(
    () => Array.from({ length: 8 }, (_, i) => ({ id: i + 1 })),
    [],
  );

  const viewportRef = useRef(null);

  // 뼈대용 인덱스 (나중에 translateX 계산에 사용)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardW, setCardW] = useState(0);

  // ✅ 뷰포트 기준으로 카드 폭 계산 (4개 딱 맞게)
  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => {
      const viewportWidth = el.getBoundingClientRect().width;
      const w = (viewportWidth - GAP * (VISIBLE - 1)) / VISIBLE;
      setCardW(w);
    };

    update();

    // 반응형 대비
    const ro = new ResizeObserver(update);
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  const maxIndex = Math.max(items.length - VISIBLE, 0);
  const step = cardW + GAP;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    // TODO: 마지막 인덱스 계산은 카드 개수/보이는 개수에 맞춰 조정
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <S.CarouselSection>
      <S.SectionHeader>
        <S.SectionTitle>인기 급상승! 연말 필수 요리 함께 해요</S.SectionTitle>
        <S.SectionDesc>연말 모임 다양한 미식 메뉴 도전해 보세요</S.SectionDesc>
      </S.SectionHeader>

      <S.CaroselBody>
        {/* 왼쪽 버튼 */}
        <S.CarouselNavButton
          type="button"
          aria-label="이전"
          $direction="prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        ></S.CarouselNavButton>

        {/* 슬라이더 영역 */}
        <S.CarouselViewport ref={viewportRef}>
          {/* 여기서 currentIndex로 translateX 붙이면 “진짜 슬라이드”가 됨 */}
          <S.CarouselTrack
            style={{ transform: `translateX(-${currentIndex * step}px)` }}
          >
            {items.map((item) => (
              <S.CarouselCard key={item.id} type="button" $w={cardW}>
                <S.CardImageArea
                  src="/assets/images/oatmeal.png"
                  alt="딸기오트밀 이미지"
                />
                <S.CardContentArea>
                  <S.CardTitleRow>
                    <S.CardTitleLeft>
                      <S.ProfileImg
                        src="/assets/images/pinggu.png" // 임시(나중에 item.userProfile로)
                        alt="유저 프로필"
                      />
                      <S.CardTitle>김치찌개</S.CardTitle>
                    </S.CardTitleLeft>

                    <S.CardLikeArea>
                      <S.HeartIcon aria-hidden />
                      <S.LikeCount>24</S.LikeCount>
                    </S.CardLikeArea>
                  </S.CardTitleRow>

                  {/* 타이틀/메타 사이 분리선 */}
                  <S.CardDivider />

                  <S.CardMetaRow>
                    <S.MetaLeft>
                      <S.UserNickName>굴곡밥러버</S.UserNickName>
                    </S.MetaLeft>

                    <S.MetaCenter>
                      <S.BadgeChip>
                        <S.BadgeChipIcon
                          src="/assets/icons/star.png"
                          alt="별 아이콘"
                        />
                        Lv.4
                      </S.BadgeChip>

                      <S.BadgeChip2>XP 150</S.BadgeChip2>
                    </S.MetaCenter>

                    <S.MetaRight>
                      <S.CardDateText>3일 전</S.CardDateText>
                    </S.MetaRight>
                  </S.CardMetaRow>

                  <S.CardDesc>
                    매생이 향이 진해서 국을 뜨자마자 바다 향이 확 올라와요. 굴도
                    비린 맛 하나 없이 신선해서 씹을 때마다 탱글한 식감이
                    느껴졌어요.
                  </S.CardDesc>
                </S.CardContentArea>
              </S.CarouselCard>
            ))}
          </S.CarouselTrack>
        </S.CarouselViewport>

        {/* 오른쪽 버튼 */}
        <S.CarouselNavButton
          type="button"
          aria-label="다음"
          $direction="next"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
        ></S.CarouselNavButton>
      </S.CaroselBody>
    </S.CarouselSection>
  );
};

export default TrendingCarousel;
