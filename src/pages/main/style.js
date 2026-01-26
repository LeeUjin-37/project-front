import styled from "styled-components";
import { FONT_STYLE } from "../../styles/common";

/* ===== 메인 히어로 ===== */

export const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 520px;
  /* background-image: url("/images/main-hero.jpg"); */
  background: red; /* 임시 */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;

export const HeroContent = styled.div`
  margin-left: 120px;
  color: ${({ theme }) => theme.PALLETE.white};
`;

export const HeroTitle = styled.h2`
  ${FONT_STYLE.GIANTS.H3_BOLD};
  color: ${({ theme }) => theme.PALLETE.primary};
  line-height: 1.3;
  margin-bottom: 16px;
`;

export const HeroDesc = styled.p`
  ${FONT_STYLE.GIANTS.BODY2_REGULAR};
  color: ${({ theme }) => theme.PALLETE.white};
  line-height: 1.6;
  margin-bottom: 24px;
`;

export const HeroButton = styled.button`
  ${FONT_STYLE.GIANTS.BODY3_MEDIUM};
  padding: 10px 18px;
  border: 1px solid ${({ theme }) => theme.PALLETE.primary};
  background: transparent;
  color: ${({ theme }) => theme.PALLETE.primary};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.PALLETE.primary};
    color: ${({ theme }) => theme.PALLETE.white};
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: ${({ theme }) => theme.PALLETE.white};
  font-size: 40px;
  cursor: pointer;
  padding: 4px 12px;

  &.left {
    left: 40px;
  }

  &.right {
    right: 40px;
  }
`;

export const Indicator = styled.div`
  ${FONT_STYLE.GIANTS.CAPTION_REGULAR};
  margin-top: 20px;
  opacity: 0.8;
`;

/* ===== 기존 샘플 (원래 있던 거) ===== */
export const MainTitle = styled.h1`
  ${FONT_STYLE.GIANTS.H7_REGULAR}
  color: ${({ theme }) => theme.PALLETE.black};
`;