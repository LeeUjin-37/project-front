import React from "react";
import * as S from "../../pages/reportandchallenge/style";

const ReportChallengeHero = ({
  onClickJoin,
  images = {
    bg: "/assets/images/reportandchallenge/v_bg.png",
    deco: "/assets/images/reportandchallenge/v_obj01.png",
    cardFrame: "/assets/images/reportandchallenge/v_frame.png",
  },
}) => {
  return (
    <S.HeroSection>
      {/* 배경 */}
      <S.HeroBgImg src={images.bg} alt="" />

      {/* 장식 오브젝트 */}
      <S.HeroDecoImg $pos="left" src={images.deco} alt="" />

      <S.HeroInner>
        {/* 프레임 */}
        {images.cardFrame ? (
          <S.HeroDecoImg $pos="card" src={images.cardFrame} alt="" />
        ) : null}

        {/* 텍스트/버튼 */}
        <S.HeroCard>
          <S.HeroTitle>리포트 &amp; 챌린지</S.HeroTitle>
          <S.HeroDesc>
            이번주 나의 냉장고 성과를 한눈에 확인하세요!
          </S.HeroDesc>

          <S.HeroButton type="button" onClick={onClickJoin}>
            <S.HeroButtonText>
              이번 주 챌린지 참여하기
            </S.HeroButtonText>

            <S.HeroButtonIcon aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </S.HeroButtonIcon>
          </S.HeroButton>
        </S.HeroCard>
      </S.HeroInner>
    </S.HeroSection>
  );
};

export default ReportChallengeHero;
