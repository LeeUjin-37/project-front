import { flexCenter, FONT_STYLE } from "../../styles/common";
import styled, { keyframes } from "styled-components";

/** ---------------------------
 * SortTab (오른쪽 정렬 탭)
 * --------------------------- */
export const SortTabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  margin-bottom: 24px;
`;

export const SortTabButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  ${FONT_STYLE.PRETENDARD.H7_REGULAR};

  color: ${({ theme, $active }) =>
    $active ? theme.PALLETE.mainblack : theme.PALLETE.gray[700]};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};

  transition: color 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.PALLETE.mainblack};
  }
`;

/** ---------------------------
 * Grid (4열)
 * --------------------------- */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 30px;

  @media (max-width: 1320px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

/** ---------------------------
 * Card (1번 스타일)
 * - 보더/그림자 없음
 * - 썸네일 정사각형
 * --------------------------- */
export const Card = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  text-align: left;
  cursor: pointer;

  /* 버튼 기본 스타일 제거 */
  appearance: none;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.PALLETE.primary.main};
    outline-offset: 6px;
    border-radius: 14px;
  }
`;

const pop = keyframes`
  0%   { transform: scale(1); }
  35%  { transform: scale(1.25); }
  65%  { transform: scale(0.92); }
  100% { transform: scale(1); }
`;

export const ThumbArea = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;       /* 정사각형 */
  border-radius: 18px;        /* 1번처럼 둥글게 */
  overflow: hidden;
`;

export const ThumbImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  transform: translateZ(0);
`;

export const BookmarkIcon = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 28px;
  height: 28px;

  cursor: pointer;
  z-index: 2;

  transition: transform 0.15s ease, opacity 0.15s ease;
  transform-origin: center;

  &:hover {
    transform: scale(1.08);
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: 2px solid rgba(0, 0, 0, 0.25);
    outline-offset: 3px;
    border-radius: 6px;
  }

  /* ✅ 저장된 상태로 바뀔 때 살짝 튕김 */
  &[data-saved="true"] {
    animation: ${pop} 240ms ease-out;
  }
`;

/** ---------------------------
 * Text / Badges / Chips
 * --------------------------- */
export const Body = styled.div`
  padding-top: 14px;
`;

export const Title = styled.h6`
  ${FONT_STYLE.PRETENDARD.H6_REGULAR};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  margin: 0 0 10px;
  line-height: 1.3;

  /* 너무 길면 ... 처리 (1번처럼) */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Desc = styled.p`
  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  color: ${({ theme }) => theme.PALLETE.primary.mainblack};
  margin: 6px 0 14px;
  line-height: 22px;

  /* 두 줄에서 ... 처리 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const BadgeRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;

export const Badge = styled.span`
  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 10px;
  /* font-weight: 600; */
  font-weight:  ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD};

  &.star {
    background: ${({ theme }) => theme.PALLETE.primary.sub};
    color: ${({ theme }) => theme.PALLETE.primary.main};
  }

  &.xp {
    background: #dff7f1;
    color: ${({ theme }) => theme.PALLETE.secondary};
  }
`;

export const BadgeStar = styled.i`
  font-style: normal;
  line-height: 1;
`;

export const MetaRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const MetaChip = styled.span`
  ${FONT_STYLE.PRETENDARD.H8_REGULAR};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.PALLETE.gray[100]};
  color: ${({ theme }) => theme.PALLETE.mainblack};

  padding: 10px 12px;
  border-radius: 999px;
  white-space: nowrap;
`;
