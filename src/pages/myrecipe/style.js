import { styled } from "styled-components";
import { FONT_STYLE } from "../../styles/common";

/* ===========================
   SortTab (오른쪽 정렬 탭)
=========================== */

export const SortTabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* 오른쪽으로 */
  gap: 24px;
  margin-bottom: 18px;
  padding-right: 20px;
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


/* ===========================
   Empty State
=========================== */

export const EmptyWrap = styled.div`
  width: 100%;
  min-height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const EmptyTitle = styled.p`
  ${FONT_STYLE.PRETENDARD.H6_REGULAR};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  font-weight: 600;
`;

export const EmptyDesc = styled.p`
  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray[700]};
`;
