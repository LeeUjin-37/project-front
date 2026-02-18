import styled from "styled-components";
import { FONT_STYLE } from "../../styles/common";

export const Page = styled.main`
  width: 100%;
  background: ${({ theme }) => theme.PALLETE.white};
`;

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 578px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

`;


export const HeroBgImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  user-select: none;
  pointer-events: none;
`;

export const HeroDecoImg = styled.img`
  position: absolute;
  z-index: ${({ $pos }) => ($pos === "card" ? 2 : 1)};
  z-index: 1;
  user-select: none;
  pointer-events: none;

  ${({ $pos, theme }) =>
    $pos === "left" &&
    `
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: auto;
      
    `}

  ${({ $pos, theme }) =>
    $pos === "right" &&
    `
      right: ${theme.SPACING[6]};
      top: 50%;
      transform: translateY(-50%);
      width: min(320px, 35vw);
      height: auto;
    `}

  ${({ $pos }) =>
    $pos === "card" &&
    `
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: min(760px, 92%);
      height: auto;
    `}
`;

export const HeroInner = styled.div`
  position: relative;
  width: 100%;
  z-index: 3;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroCard = styled.div`
  width: min(680px, 100%);
  padding: ${({ theme }) => theme.SPACING[14]} ${({ theme }) => theme.SPACING[8]};
  text-align: center;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.SPACING[10]} ${({ theme }) => theme.SPACING[5]};
  }
`;

export const HeroTitle = styled.h2`
  margin: 0;
  ${FONT_STYLE.GIANTS.H3_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.h1};
  line-height: ${({ theme }) => theme.FONT_LINE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  color: ${({ theme }) => theme.PALLETE.mainblack};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.h5};
    line-height: ${({ theme }) => theme.FONT_LINE.h5};
  }
`;

export const HeroDesc = styled.p`
  margin: 36px 0 25px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  line-height: ${({ theme }) => theme.FONT_LINE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  color: #333333;

  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.SPACING[2]} 0 ${({ theme }) => theme.SPACING[5]};
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    line-height: ${({ theme }) => theme.FONT_LINE.h8};
  }
`;

export const HeroButton = styled.button`
  width: 322px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${({ theme }) => theme.SPACING[6]};
  border-radius: ${({ theme }) => theme.RADIUS.sm};
  border: 1.5px solid #4726FF;
  background: rgba(255, 255, 255, 0.9);
  cursor: pointer;

  display: inline-flex;
  gap: ${({ theme }) => theme.SPACING[2]};


  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.14);
  }

  &:active {
    transform: translateY(0px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.PALLETE.primary.main};
    outline-offset: 2px;
  }
`;

export const HeroButtonText = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  color: ${({ theme }) => theme.PALLETE.mainblack};
`;

export const HeroButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #4726FF;
`;


/* ChallengeList SECTION */
export const ListSection = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.PALLETE.white};
`;

export const ListInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: ${({ theme }) => theme.SPACING[12]} ${({ theme }) => theme.SPACING[6]};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.SPACING[10]} ${({ theme }) => theme.SPACING[5]};
  }
`;

export const ListTitle = styled.h3`
  margin: 140px 0 ${({ theme }) => theme.SPACING[6]};
  ${FONT_STYLE.GIANTS.H3_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  line-height: ${({ theme }) => theme.FONT_LINE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  color: ${({ theme }) => theme.PALLETE.mainblack};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    line-height: ${({ theme }) => theme.FONT_LINE.h7};
  }
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.SPACING[4]};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  padding: 10px 0;
  border-radius: ${({ theme }) => theme.RADIUS.md};
  background: ${({ theme }) => theme.PALLETE.gray[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const StatIconWrap = styled.div`
  width: 50px;
  height: 48px;
  border-radius: ${({ theme }) => theme.RADIUS.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex: 0 0 auto;
`;

export const StatText = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.SPACING[2]};
  min-width: 0;
`;

export const StatLabel = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  color: ${({ theme }) => theme.PALLETE.gray[900]};
  white-space: nowrap;
`;

export const StatValue = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.BOLD};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  white-space: nowrap;
`;


// ====== MaterialUsageTrend (재료 사용 추이) ======

export const TrendSection = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.PALLETE.white};
`;

export const TrendInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 140px auto 0;

  @media (max-width: 1024px) {
    padding: ${({ theme }) => theme.SPACING[10]} ${({ theme }) => theme.SPACING[6]};
      ${({ theme }) => theme.SPACING[14]};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.SPACING[8]} ${({ theme }) => theme.SPACING[5]};
      ${({ theme }) => theme.SPACING[12]};
  }
`;

export const TrendHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.SPACING[6]};
  margin-bottom: ${({ theme }) => theme.SPACING[6]};
`;

export const TrendTitle = styled.h3`
  margin: 0;
  ${FONT_STYLE.GIANTS.H3_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  line-height: ${({ theme }) => theme.FONT_LINE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  color: ${({ theme }) => theme.PALLETE.mainblack};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.h6};
    line-height: ${({ theme }) => theme.FONT_LINE.h6};
  }
`;

export const TrendToggle = styled.div`
  display: inline-flex;
  background: ${({ theme }) => theme.PALLETE.gray[100]};
  border-radius: ${({ theme }) => theme.RADIUS.md};
  padding: 4px;
  gap: 4px;
`;

export const TrendToggleBtn = styled.button`
  min-width: 64px;
  height: 34px;
  padding: 0 14px;
  border: 0;
  border-radius: ${({ theme }) => theme.RADIUS.md};
  cursor: pointer;

  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};

  color: ${({ $active, theme }) => ($active ? theme.PALLETE.white : theme.PALLETE.gray[900])};
  background: ${({ $active, theme }) => ($active ? theme.PALLETE.primary.main : "transparent")};

  transition: background 180ms ease, color 180ms ease, transform 120ms ease;

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.PALLETE.primary.main};
    outline-offset: 2px;
  }
`;

export const TrendCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: ${({ theme }) => theme.RADIUS.sm};
  background: ${({ theme }) => theme.PALLETE.white};
  padding: ${({ theme }) => theme.SPACING[6]};
`;

export const TrendSvgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 360px;

  @media (max-width: 768px) {
    height: 320px;
  }

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* ====== 모션: 바가 아래에서 위로 차오르는 느낌 ====== */
  .bar {
    transform-origin: 50% 100%;
    animation: barGrow 520ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }

  .bar-used {
    fill: #7b61ff;
    animation-delay: 40ms;
  }

  .bar-waste {
    fill: #ff6b86;
    animation-delay: 80ms;
  }

  @keyframes barGrow {
    from {
      transform: scaleY(0.12);
      opacity: 0.65;
    }
    to {
      transform: scaleY(1);
      opacity: 1;
    }
  }
`;

export const TrendLegend = styled.div`
  margin-top: ${({ theme }) => theme.SPACING[5]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.SPACING[8]};
`;

export const TrendLegendItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.SPACING[2]};
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  color: ${({ theme }) => theme.PALLETE.mainblack};
`;

export const TrendLegendDot = styled.span`
  width: 22px;
  height: 22px;
  border-radius: ${({ theme }) => theme.RADIUS.sm};
  background: ${({ $tone }) => ($tone === "used" ? "#7b61ff" : "#ff6b86")};
`;

export const TrendTooltip = styled.div`
  position: absolute;
  min-width: 170px;
  padding: 14px 16px;
  border-radius: ${({ theme }) => theme.RADIUS.md};
  background: ${({ theme }) => theme.PALLETE.white};
  border: 1.5px solid ${({ theme }) => theme.PALLETE.primary.main};
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  pointer-events: none;

  animation: tipIn 160ms ease both;

  @keyframes tipIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export const TrendTooltipTitle = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  margin-bottom: 8px;
`;

export const TrendTooltipRow = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  color: ${({ $tone }) => ($tone === "used" ? "#7b61ff" : "#ff6b86")};

  b {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.BOLD};
  }

  & + & {
    margin-top: 6px;
  }
`;


// ====== WeeklyChallengeCard (이번 주 챌린지) ======

export const WeeklySection = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.PALLETE.white};
`;

export const WeeklyInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 140px auto 0;

  @media (max-width: 1024px) {
    padding: 0 ${({ theme }) => theme.SPACING[6]} ${({ theme }) => theme.SPACING[14]};
  }

  @media (max-width: 768px) {
    padding: 0 ${({ theme }) => theme.SPACING[5]} ${({ theme }) => theme.SPACING[12]};
  }
`;

export const WeeklyTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.SPACING[6]};
  ${FONT_STYLE.GIANTS.H3_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  line-height: ${({ theme }) => theme.FONT_LINE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  color: ${({ theme }) => theme.PALLETE.mainblack};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.h6};
    line-height: ${({ theme }) => theme.FONT_LINE.h6};
  }
`;

export const WeeklyCard = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.PALLETE.gray[50]};
  border-radius: ${({ theme }) => theme.RADIUS.lg};
  padding: ${({ theme }) => theme.SPACING[8]} ${({ theme }) => theme.SPACING[11]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.SPACING[8]};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.SPACING[7]} ${({ theme }) => theme.SPACING[6]};
    flex-direction: column;
    align-items: stretch;
  }
`;

export const WeeklyLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.SPACING[6]};
  flex: 1;
`;

export const WeeklyTrophy = styled.img`
  width: 160px;
  height: 160px;
  object-fit: contain;
  flex: 0 0 auto;
`;

export const WeeklyText = styled.div`
  min-width: 0;
  flex: 1;
`;

export const WeeklyWeek = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.BOLD};
  color: ${({ theme }) => theme.PALLETE.primary.main};
  margin-bottom: ${({ theme }) => theme.SPACING[2]};
`;

export const WeeklyMainTitle = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  line-height: ${({ theme }) => theme.FONT_LINE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.BOLD};
  color: ${({ theme }) => theme.PALLETE.mainblack};
`;

export const WeeklyWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WeeklyDesc = styled.div`
  margin-top: ${({ theme }) => theme.SPACING[2]};
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  color: rgba(0, 0, 0, 0.55);
`;

export const WeeklyProgressRow = styled.div`
  margin-top: ${({ theme }) => theme.SPACING[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.SPACING[4]};
`;

export const WeeklyProgressInfo = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  color: rgba(0, 0, 0, 0.55);

  b {
    color: ${({ theme }) => theme.PALLETE.primary.main};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.BOLD};
  }
`;

export const WeeklyBarTrack = styled.div`
  margin-top: ${({ theme }) => theme.SPACING[1]};
  width: 100%;
  height: 18px;
  border-radius: ${({ theme }) => theme.RADIUS.full};
  background: rgba(0, 0, 0, 0.10);
  overflow: hidden;
`;

export const WeeklyBarFill = styled.div`
  height: 100%;
  border-radius: ${({ theme }) => theme.RADIUS.full};
  background: linear-gradient(90deg, #8A2BE2 0%, #2A00FF 100%);

  /* 모션 */
  transition: width 900ms cubic-bezier(0.2, 0.8, 0.2, 1);
  ${({ $started }) => !$started && `width: 0% !important;`}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const WeeklyBottomRow = styled.div`
  margin-top: ${({ theme }) => theme.SPACING[1]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.SPACING[4]};
`;

export const WeeklyBottomLeft = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  color: rgba(0, 0, 0, 0.80);

  b {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.BOLD};
    color: ${({ theme }) => theme.PALLETE.mainblack};
  }
`;

export const WeeklyBottomRight = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.BOLD};
  color: rgba(0, 0, 0, 0.70);
`;

export const WeeklyRewardBtn = styled.button`
  height: 54px;
  min-width: 170px;
  padding: 0 ${({ theme }) => theme.SPACING[6]};
  border-radius: ${({ theme }) => theme.RADIUS.sm};
  border: 1.5px solid ${({ theme }) => theme.PALLETE.primary.main};
  background: rgba(255, 255, 255, 0.95);
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.SPACING[3]};

  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.BOLD};
  color: ${({ theme }) => theme.PALLETE.primary.main};

  transition: transform 160ms ease, box-shadow 160ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.12);
  }

  &:active {
    transform: translateY(0px) scale(0.99);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.PALLETE.primary.main};
    outline-offset: 2px;
  }
`;

export const WeeklyChevron = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  line-height: 1;
  margin-top: -5px;
`;


// ====== CookingProofSwiper (나의 요리 인증) ======

export const CookSection = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.PALLETE.white};
`;

export const CookInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 140px auto 80px;

  @media (max-width: 1024px) {
    padding: 0 ${({ theme }) => theme.SPACING[6]} ${({ theme }) => theme.SPACING[14]};
  }

  @media (max-width: 768px) {
    padding: 0 ${({ theme }) => theme.SPACING[5]} ${({ theme }) => theme.SPACING[12]};
  }
`;

export const CookHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.SPACING[6]};
  margin-bottom: ${({ theme }) => theme.SPACING[6]};
`;

export const CookTitle = styled.h3`
  margin: 0;
  ${FONT_STYLE.GIANTS.H3_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  line-height: ${({ theme }) => theme.FONT_LINE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  color: ${({ theme }) => theme.PALLETE.mainblack};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.h6};
    line-height: ${({ theme }) => theme.FONT_LINE.h6};
  }
`;

export const CookNav = styled.div`
  display: inline-flex;
  gap: ${({ theme }) => theme.SPACING[2]};
`;

export const CookNavBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.RADIUS.full};
  border: 1px solid ${({ theme }) => theme.PALLETE.primary.main};
  background: ${({ theme }) => theme.PALLETE.white};
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  line-height: 1;
  color: ${({ theme }) => theme.PALLETE.primary.main};

  &:hover {
    transform: translateY(-1px);
    background-color: ${({ theme }) => theme.PALLETE.primary.main};
    color: ${({ theme }) => theme.PALLETE.white};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.PALLETE.primary.main};
    outline-offset: 2px;
  }
`;

export const CookSwiperWrap = styled.div`
  width: 100%;
  overflow: hidden;

  /* swiper 기본 overflow 이슈 방지 */
  .swiper {
    overflow: visible;
  }
`;

export const CookCardBtn = styled.button`
  width: 100%;
  border: 0;
  padding: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
`;

export const CookThumb = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${({ theme }) => theme.RADIUS.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.PALLETE.gray[100]};

  /* 블러/딤(어둡게) 레이어 */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    opacity: 0;
    background: rgba(0, 0, 0, 0.25); /* 살짝 어둡게 */
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    transition: opacity 180ms ease;
    pointer-events: none;
  }

  /* hover 시 전체 블러 + 오버레이 표시 */
  @media (hover: hover) and (pointer: fine) {
    &:hover::after {
      opacity: 1;
    }

    &:hover .cook-like {
      opacity: 1;
      transform: translate(-50%, -50%) translateY(0px) scale(1);
    }
  }
`;


export const CookImg = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    height: 140px;
  }
`;

export const CookLikeOverlay = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 3; /* 블러 레이어(::after)보다 위로 */

  transform: translate(-50%, -50%) translateY(6px) scale(0.98);
  opacity: 0;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.PALLETE.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.BOLD};

  padding: 8px 14px;
  border-radius: ${({ theme }) => theme.RADIUS.full};
  /* background: rgba(0, 0, 0, 0.35); */
  /* backdrop-filter: blur(2px); */
  /* -webkit-backdrop-filter: blur(2px); */

  transition: opacity 180ms ease, transform 180ms ease;
`;


export const CookHeart = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: 1;
  color: #ff3b30;
`;

export const CookLikeCount = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
`;

export const CookName = styled.div`
  margin-top: ${({ theme }) => theme.SPACING[3]};
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD};
  color: ${({ theme }) => theme.PALLETE.mainblack};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CookMetaRow = styled.div`
  margin-top: ${({ theme }) => theme.SPACING[3]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.SPACING[3]};
`;

export const CookBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 10px;
  border-radius: ${({ theme }) => theme.RADIUS.sm};
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.BOLD};

  ${({ $tone }) =>
    $tone === "rating"
      ? `
    background: #FFF3EA;
    color: #FF6A00;
  `
      : `
    background: #E9FBF6;
    color: #018264;
  `}
`;

export const CookStar = styled.span`
  font-size: 14px;
  line-height: 1;
`;
