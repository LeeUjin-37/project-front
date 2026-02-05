import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 360px;
  /* border-radius: ${({ theme }) => theme.RADIUS.lg}; */
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  /* @media (max-width: 768px) {
    min-height: 280px;
    border-radius: ${({ theme }) => theme.RADIUS.md};
  } */
`;

/* 배경 이미지: 섹션 전체를 덮도록 */
export const HeroBgImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 배경은 cover가 일반적 */
  z-index: 0;
  user-select: none;
  pointer-events: none;
`;

/**
 * 장식 이미지용 (좌/우/카드프레임)
 * $pos:
 * - "left": 왼쪽 장식
 * - "right": 오른쪽 장식
 * - "card": 카드 프레임(중앙)
 */
export const HeroDecoImg = styled.img`
  position: absolute;
  z-index: ${({ $pos }) => ($pos === "card" ? 2 : 1)};
  user-select: none;
  pointer-events: none;

  ${({ $pos, theme }) =>
    $pos === "left" &&
    `
      left: ${theme.SPACING[6]};
      top: 50%;
      transform: translateY(-50%);
      width: min(320px, 35vw);
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

  /* @media (max-width: 768px) {
    ${({ $pos, theme }) =>
      $pos === "left" &&
      `
        left: ${theme.SPACING[3]};
        width: min(190px, 40vw);
        opacity: 0.95;
      `}
    ${({ $pos, theme }) =>
      $pos === "right" &&
      `
        right: ${theme.SPACING[3]};
        width: min(190px, 40vw);
        opacity: 0.95;
      `}
    ${({ $pos }) =>
      $pos === "card" &&
      `
        width: min(520px, 92%);
      `}
  } */
`;

export const HeroInner = styled.div`
  position: relative;
  width: min(980px, calc(100% - ${({ theme }) => theme.SPACING[8]}));
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroCard = styled.div`
  /* 카드 배경 자체도 이미지로 한다면 여기 배경은 투명/없어도 됨 */
  width: min(680px, 100%);
  padding: ${({ theme }) => theme.SPACING[14]} ${({ theme }) => theme.SPACING[8]};
  text-align: center;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.SPACING[10]} ${({ theme }) => theme.SPACING[5]};
  }
`;

export const HeroTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  line-height: ${({ theme }) => theme.FONT_LINE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.EXTRABOLD};
  color: ${({ theme }) => theme.PALLETE.mainblack};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.h5};
    line-height: ${({ theme }) => theme.FONT_LINE.h5};
  }
`;

export const HeroDesc = styled.p`
  margin: ${({ theme }) => theme.SPACING[3]} 0 ${({ theme }) => theme.SPACING[6]};
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray.footerSub};

  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.SPACING[2]} 0 ${({ theme }) => theme.SPACING[5]};
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    line-height: ${({ theme }) => theme.FONT_LINE.h8};
  }
`;

export const HeroButton = styled.button`
  height: 46px;
  padding: 0 ${({ theme }) => theme.SPACING[6]};
  border-radius: ${({ theme }) => theme.RADIUS.sm};
  border: 1.5px solid ${({ theme }) => theme.PALLETE.primary.main};
  background: rgba(255, 255, 255, 0.9);
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.SPACING[2]};

  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
  transition: transform 120ms ease, box-shadow 120ms ease, background 120ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.PALLETE.white};
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
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD};
  color: ${({ theme }) => theme.PALLETE.mainblack};
`;

export const HeroButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.PALLETE.primary.main};
`;
