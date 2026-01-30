import { styled } from "styled-components";
import { FONT_STYLE } from "../../styles/common";

// SortTab 컴포넌트 스타일
export const SortTabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  margin-bottom: 24px;
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
  font-weight: ${({ $active }) => ($active ? 500 : 400)};

  transition: color 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.PALLETE.mainblack};
  }
`;


// 
export const Section = styled.section`
  width: 100%;
`;

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

export const Card = styled.article`
  border: 1px solid ${({ theme }) => theme.PALLETE.gray[200]};
  border-radius: 10px;
  background: ${({ theme }) => theme.PALLETE.background.white};
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 210px;
  overflow: hidden;
`;

export const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.25s ease;

  ${Card}:hover & {
    transform: scale(1.03);
  }
`;

export const BookmarkButton = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.PALLETE.gray[200]};
  background: rgba(255,255,255,0.92);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BookmarkIcon = styled.img`
  width: 18px;
  height: 18px;
  display: block;
`;

export const Body = styled.div`
  padding: 18px 20px 20px;
`;

export const Title = styled.h6`
  ${FONT_STYLE.PRETENDARD.H6_REGULAR};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  margin-bottom: 8px;
`;

export const Desc = styled.p`
  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray[700]};
  line-height: 24px;
  margin-bottom: 12px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const MetaRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;

export const Badge = styled.span`
  ${FONT_STYLE.PRETENDARD.H8_REGULAR};
  padding: 6px 10px;
  border-radius: 6px;
  background: ${({ theme, $green }) =>
    $green ? "#DFF7F1" : theme.PALLETE.primary.sub};
  color: ${({ theme, $green }) =>
    $green ? theme.PALLETE.secondary : theme.PALLETE.primary.main};
  font-weight: 600;
`;

export const BadgeText = styled.span``;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const InfoChip = styled.span`
  ${FONT_STYLE.PRETENDARD.H8_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray[700]};
  background: ${({ theme }) => theme.PALLETE.gray[100]};
  padding: 8px 10px;
  border-radius: 999px;
  flex: 1;
  text-align: center;
`;

// 페이지네이션
export const PaginationArea = styled.div`
  margin: 42px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const PageButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray[700]};
`;

export const PageNumber = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  color: ${({ theme, $active }) =>
    $active ? theme.PALLETE.primary.main : theme.PALLETE.gray[700]};
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  background: transparent;
`;
