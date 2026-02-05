import React from "react";
import {
  HeroSection,
  HeroInner,
  HeroBgImg,
  HeroDecoImg,
  HeroCard,
  HeroTitle,
  HeroDesc,
  HeroButton,
  HeroButtonText,
  HeroButtonIcon,
} from "../../pages/reportandchallenge/style";

const ReportChallengeHero = ({
  onClickJoin,
  images = {
    bg: "/assets/images/reportandchallenge/v_bg.png",
    deco: "/assets/images/reportandchallenge/v_obj01.png",
    cardFrame: "/assets/images/reportandchallenge/v_frame.png",
  },
}) => {
  return (
    <HeroSection>
      {/* 배경 */}
      <HeroBgImg src={images.bg} alt="" />

      {/* 장식 오브젝트 (지금은 1장만 쓰는 구조) */}
      <HeroDecoImg $pos="left" src={images.deco} alt="" />

      <HeroInner>
        {/* 프레임 */}
        {images.cardFrame ? (
          <HeroDecoImg $pos="card" src={images.cardFrame} alt="" />
        ) : null}

        {/* 텍스트/버튼 */}
        <HeroCard>
          <HeroTitle>리포트 &amp; 챌린지</HeroTitle>
          <HeroDesc>이번주 나의 냉장고 성과를 한눈에 확인하세요!</HeroDesc>

          <HeroButton type="button" onClick={onClickJoin}>
            <HeroButtonText>이번 주 챌린지 참여하기</HeroButtonText>
            <HeroButtonIcon aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </HeroButtonIcon>
          </HeroButton>
        </HeroCard>
      </HeroInner>
    </HeroSection>
  );
};

export default ReportChallengeHero;
