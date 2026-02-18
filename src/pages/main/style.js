import styled, { keyframes } from "styled-components";
import { FONT_STYLE } from "../../styles/common";
import { Swiper } from "swiper/react";

/* ===== MainHero Section ===== */

export const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;

  .swiper,
  .swiper-wrapper,
  .swiper-slide {
    height: 600px;
  }
`;

export const HeroSlide = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #fff;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    background: linear-gradient(
      to right,
      rgba(0,0,0,0.18) 0%,
      rgba(0,0,0,0.00) 20%,
      rgba(0,0,0,0.00) 80%,
      rgba(0,0,0,0.18) 100%
    );
  }
`;

// 1) 뒤에 깔리는 블러 배경
export const HeroBlurBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  background-image: ${({ $bg }) => ($bg ? `url(${$bg})` : "none")};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  filter: blur(28px);
  transform: scale(1.12);
  opacity: 0.55;
`;

export const HeroImage = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background-image: ${({ $bg }) => ($bg ? `url(${$bg})` : "none")};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;


export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  margin-left: clamp(20px, 13vw, 380px);
  max-width: 560px;
  color: ${({ theme }) => theme.PALLETE.white};
`;
export const HeroTitle = styled.h2`
  ${FONT_STYLE.GIANTS.H3_BOLD};
  color: ${({ theme }) => theme.PALLETE.primary.main};
  line-height: 1.3;
  margin-bottom: 20px;
`;

export const HeroDesc = styled.p`
  ${FONT_STYLE.GIANTS.BODY2_REGULAR};
  color: rgba(255, 255, 255, 0.9);
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: 1.4;
  margin-bottom: 24px;
`;

export const HeroButton = styled.button`
  ${FONT_STYLE.GIANTS.BODY3_MEDIUM};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  height: 40px;
  padding: 0 18px;
  border-radius: ${({ theme }) => theme.RADIUS.sm};
  border: 1px solid  ${({ theme }) => theme.PALLETE.primary.main};
  background: ${({ theme }) => theme.PALLETE.white};
  color: ${({ theme }) => theme.PALLETE.headerandfooter};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.PALLETE.primary.main};
    font-size: 18px;
    transform: translateY(-1px);
  }
`;


/* ===== 컨트롤바 ===== */
export const HeroControlBar = styled.div`
  position: absolute;
  left: clamp(20px, 10vw, 350px);
  bottom: 28px;
  z-index: 30;
  display: inline-flex;
  align-items: center;
  gap: 16px;
  background-color: #0000004b;
  padding: 5px 15px;
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.9);
`;

export const ControlCount = styled.div`
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 1;
`;

/* 공통 버튼 */
export const ControlBtn = styled.button`
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.95);

  /* 오른쪽 > 버튼 */
  &.next {
    font-size: 28px;
    line-height: 1;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
    transform: translateY(-1px);
  }

  /* 왼쪽 동그라미 버튼 (pause/play 토글) */
  &.pause {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 9999px;
    border: 2px solid rgba(255, 255, 255, 0.6);
  }

  /* pause 아이콘( || ) */
  &.pause::before,
  &.pause::after {
    content: "";
    position: absolute;
    top: 7px;
    width: 3px;
    height: 12px;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 2px;
  }
  &.pause::before {
    left: 10px;
  }
  &.pause::after {
    left: 15px;
  }

  /* 재생 상태(is-play)면 pause 막대 숨기고 play 삼각형 표시 */
  &.pause.is-play::before,
  &.pause.is-play::after {
    display: none;
  }

  &.pause.is-play span {
    display: none;
  }

  &.pause.is-play {
    /* play 삼각형 */
  }
  &.pause.is-play::after {
    display: block;
    content: "";
    position: absolute;
    left: 11px;
    top: 7px;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 9px solid rgba(255, 255, 255, 0.85);
    background: transparent;
  }
`;

export const HeroArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 40;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;

  color: rgba(255, 255, 255, 0.95);
  font-size: 64px;
  line-height: 1;

  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.55);

  &.left {
    left: clamp(20px, 6vw, 250px);
  }

  &.right {
    right: clamp(20px, 6vw, 250px);
  }

  &:hover {
    color: #ffffff;
  }
`;

/* ===== MainHowItWorks Section ===== */

export const HowWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 140px 0;
  background: ${({ theme }) => theme.PALLETE.white};
  width: 1420px;
  margin: 0 auto;
`;

export const LeftArea = styled.div`
  flex: 1;
`;

export const RightArea = styled.div`
  flex: 1.3;
`;

export const SectionTitle = styled.h2`
  ${FONT_STYLE.GIANTS.H3_BOLD};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  margin-bottom: 30px;
  font-size: 26px;
  line-height: 1;
`;

export const SectionDesc = styled.p`
  ${FONT_STYLE.GIANTS.BODY2_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray700};
  line-height: 1.6;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 996px;
`;

export const StepCard = styled.div`
  background: ${({ theme })=> theme.PALLETE.gray[50]};
  border-radius: 16px;
  padding: 30px;
  display: flex;
`;

export const StepIcon = styled.div`
  font-size: 28px;
  margin: 0 5px 12px 0;
`;

const iconBounce = keyframes`
  0% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0);
  }
`;

export const WorksIconImg = styled.img`
  &:hover {
    animation: ${iconBounce} 0.5s ease;
  }
`;

export const StepTitle = styled.h4`
  ${FONT_STYLE.GIANTS.BODY1_BOLD};
  font-size: ${({ theme })=> theme.FONT_SIZE.h6};
  font-weight: ${({ theme })=> theme.FONT_WEIGHT.PRETENDARD.BOLD};
  margin-bottom: 8px;
`;

export const StepDesc = styled.p`
  ${FONT_STYLE.GIANTS.CAPTION_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray600};
  font-size: ${({ theme })=> theme.FONT_SIZE.h7};
  font-weight: ${({ theme })=> theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  line-height: 1.5;
`;

export const StepPoint = styled.strong`
  ${FONT_STYLE.GIANTS.CAPTION_REGULAR};
  color: ${({ theme }) => theme.PALLETE.primary.main};
  font-weight: ${({ theme })=> theme.FONT_WEIGHT.PRETENDARD.BOLD};
  line-height: 1.5;
`;

export const StepTextArea = styled.div`
`;

/* ===== MainRecipe Section ===== */
export const RecipePanel = styled.div`
`;

export const RecipeSectionGroup = styled.div`
    margin-bottom: 140px;
`;

export const RecipeWrapper = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.PALLETE.white};

  & + & {
    margin-top: 90px;
  }

`;

export const RecipeInner = styled.div`
  width: 1420px;
  margin: 0 auto;
`;

export const RecipeTitle = styled.h2`
  ${FONT_STYLE.GIANTS.H3_BOLD};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  font-size: 26px;
  line-height: 1;
  margin-bottom: 30px;
`;

export const RecipeTabs = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 18px;
`;

export const RecipeTab = styled.button`
  border: 0;
  cursor: pointer;
  padding: 9px 14px;
  border-radius: 999px;
  background: ${({ theme }) => theme.PALLETE.gray[100]};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  font-weight: ${({ theme })=> theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  font-size: ${({ theme })=> theme.FONT_SIZE.h7};
  line-height: 1;

  &.is-active {
    background: ${({ theme }) => theme.PALLETE.mainblack};
    color: ${({ theme }) => theme.PALLETE.white};
  }
`;

export const RecipeCard = styled.div`
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: ${({ theme }) => theme.PALLETE.white};
  cursor: pointer;
`;

export const RecipeThumb = styled.div`
  width: 100%;
  height: 190px;
  background: ${({ theme }) => theme.PALLETE.gray[50]};
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const RecipeBody = styled.div`
  padding: 15px 0px 15px;
`;

export const RecipeName = styled.div`
  ${FONT_STYLE.GIANTS.BODY1_BOLD};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.BOLD};
  margin-bottom: 12px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


export const BadgeRow = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 12px;
`;


export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  line-height: 1;

  &.star {
    background: #ffefe6;
    color: ${({ theme }) => theme.PALLETE.primary.main};

    i {
      font-style: normal;
      font-size: 15px;
      transform: translateY(-1px);
    }
  }

  &.xp {
    background: #e7faf2;
    color: #017a5a;
  }
`;

export const MetaRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
`;

export const MetaChip = styled.span`
  ${FONT_STYLE.GIANTS.CAPTION_REGULAR};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 20px;
  padding: 12px 13px;
  background: ${({ theme }) => theme.PALLETE.gray[70]};
  color: ${({ theme }) => theme.PALLETE.gray700};
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT?.PRETENDARD?.MEDIUM || 500};
  line-height: 1;
`;


/* ===== Main Live Review Section ===== */

export const LiveReviewWrapper = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.PALLETE.gray[50]};
  padding: 70px 0 20px;
`;

export const LiveReviewInner = styled.div`
  width: 1420px;
  margin: 0 auto;
`;

export const LiveReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
  align-items: center;
`;

export const LiveReviewTitleBox = styled.div``;

export const LiveReviewSubTitle = styled.p`
  ${FONT_STYLE.GIANTS.CAPTION_REGULAR};
  color: ${({ theme }) => theme.PALLETE.primary.main};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  margin-bottom: 8px;
`;

export const LiveReviewTitle = styled.h2`
  ${FONT_STYLE.GIANTS.H3_BOLD};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  font-size: 30px;
  line-height: 1;
  margin-bottom: 30px;
`;

export const LiveReviewMoreButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  height: fit-content;

  ${FONT_STYLE.GIANTS.CAPTION_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray600};
  opacity: 50%;
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD};
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    font-size: 22px;
    font-weight: 500;
    line-height: 1;
    transform: translateY(1px);
    margin-top: -5px;
  }

`;

export const LiveReviewSwiper = styled(Swiper)`
  width: 100%;
  padding-bottom: 50px;

  .swiper-wrapper {
    align-items: stretch;
  }

  .swiper-slide {
    height: auto;
  }
`;


export const LiveReviewCard = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.PALLETE.white};
  border-radius: 16px;
  padding: 24px 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);

  min-height: 274px;
  display: flex;
  flex-direction: column;
  &.has-images {
    min-height: 359px;
  }

`;

export const LiveReviewCardTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LiveReviewMetaLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LiveReviewAvatar = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${({ theme }) => theme.PALLETE.gray[100]};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const LiveReviewRecipeTitle = styled.p`
  ${FONT_STYLE.GIANTS.BODY1_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD};
`;

export const LiveReviewBadgeRow = styled.div`
  display: flex;
  gap: 10px;
`;

export const LiveReviewBadge = styled.span`
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD};

  &.star {
    background: #ffefe6;
    color: ${({ theme }) => theme.PALLETE.primary.main};
  }

  &.xp {
    background: #e7faf2;
    color: #017a5a;
  }
`;

export const LiveReviewArrowBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "›";
    font-size: 25px;
    font-weight: 400;
    line-height: 1;
    transform: translateX(1px);
    color: ${({ theme }) => theme.PALLETE.headerandfooter};
  }
`;

export const LiveReviewDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.PALLETE.gray[70]};
  margin: 24px 0 22px;
`;

export const LiveReviewUserName = styled.p`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.BOLD};
`;

export const LiveReviewContent = styled.p`
  color: ${({ theme }) => theme.PALLETE.gray700};
  line-height: 1.6;
  margin-top: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const LiveReviewImageRow = styled.div`
  margin-top: auto;
  padding-top: 14px;
  display: grid;
  gap: 10px;

  &.count-1 {  grid-template-columns: repeat(3, 1fr);  }
  &.count-2 { grid-template-columns: repeat(3, 1fr); }
  &.count-3 { grid-template-columns: repeat(3, 1fr); }
`;

export const LiveReviewThumb = styled.div`
  height: 58px;
  overflow: hidden;
  border-radius: 12px;
  background: ${({ theme }) => theme.PALLETE.gray[50]};
`;

export const MinWidth0 = styled.div`
  min-width: 0;
`;