import styled from "styled-components";
import { FONT_STYLE } from "../../styles/common";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 28px;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 920px;

  background: ${({ theme }) => theme.PALLETE.white};
  border-radius: 20px;
  overflow: hidden;

  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.22);
`;

export const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 330px;
  background: #ddd;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const HeroPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${FONT_STYLE.PRETENDARD.H6_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray[700]};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 5;

  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`;

export const CloseIcon = styled.img`
  width: 22px;
  height: 22px;
`;

export const NavButtonLeft = styled.button`
  position: absolute;
  left: 22px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;

  width: 56px;
  height: 56px;
  border-radius: 999px;

  border: none;
  background: rgba(255, 255, 255, 0.95);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.PALLETE.gray[100]};
  }
`;

export const NavButtonRight = styled(NavButtonLeft)`
  left: auto;
  right: 22px;
`;

export const NavIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const ImageIndex = styled.div`
  position: absolute;
  right: 18px;
  bottom: 14px;
  z-index: 5;

  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.55);

  ${FONT_STYLE.PRETENDARD.H8_REGULAR};
  color: #fff;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 22px;

  padding: 22px 24px 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Left = styled.div`
  min-width: 0;
`;

export const Right = styled.div`
  min-width: 0;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
`;

export const Nickname = styled.div`
  ${FONT_STYLE.PRETENDARD.H6_REGULAR};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD};
  color: ${({ theme }) => theme.PALLETE.mainblack};
`;

export const MetaRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LevelBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 6px 10px;
  border-radius: 5px;

  background: ${({ theme }) => theme.PALLETE.primary.sub};
  color: ${({ theme }) => theme.PALLETE.primary.main};

  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
`;

export const LevelIcon = styled.img`
  width: 14px;
  height: 14px;
`;

export const LikeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  color: ${({ theme }) => theme.PALLETE.mainblack};
`;

export const HeartIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const DateText = styled.div`
  margin-top: 8px;
  ${FONT_STYLE.PRETENDARD.H8_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray[600]};
`;

export const Title = styled.h2`
  margin: 18px 0 10px;
  ${FONT_STYLE.PRETENDARD.H6_SEMIBOLD};
  color: ${({ theme }) => theme.PALLETE.mainblack};
`;

export const Desc = styled.p`
  margin: 0 0 10px;
  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  line-height: 1.55;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const DetailLink = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  margin-bottom: 18px;

  ${FONT_STYLE.PRETENDARD.H7_MEDIUM};
  color: ${({ theme }) => theme.PALLETE.primary.main};

  &:hover {
    text-decoration: underline;
  }
`;

export const SectionTitle = styled.div`
  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  margin-bottom: 10px;
`;

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
`;

export const Chip = styled.span`
  ${FONT_STYLE.PRETENDARD.H8_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray[800]};

  background: ${({ theme }) => theme.PALLETE.gray[100]};
  border-radius: 5px;
  padding: 4px 8px;
`;

export const XpBox = styled.div`
  margin-top: 8px;
  padding: 12px 14px;
  border-radius: 8px;

  background: ${({ theme }) => theme.PALLETE.primary.sub};

  ${FONT_STYLE.PRETENDARD.H8_REGULAR};
  color: ${({ theme }) => theme.PALLETE.primary.mainblack};

  b {
    color: ${({ theme }) => theme.PALLETE.primary.main};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD};
  }
`;

/* ---------- comments ---------- */

export const CommentHeader = styled.div`
  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  margin-bottom: 10px;
`;

export const CommentList = styled.div`
  height: 170px;
  overflow: auto;
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.PALLETE.gray[200]};
  border-radius: 5px;
  background: ${({ theme }) => theme.PALLETE.white};

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const EmptyComment = styled.div`
  ${FONT_STYLE.PRETENDARD.H8_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray[600]};
  padding: 8px 2px;
`;

export const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CommentTop = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CommentNickname = styled.div`
  ${FONT_STYLE.PRETENDARD.H8_REGULAR};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD};
  color: ${({ theme }) => theme.PALLETE.mainblack};
`;

export const CommentTime = styled.div`
  ${FONT_STYLE.PRETENDARD.H8_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray[600]};
`;

export const CommentText = styled.div`
  ${FONT_STYLE.PRETENDARD.H8_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray[900]};
  line-height: 1.5;
`;

export const CommentComposer = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 44px;
  gap: 10px;
  align-items: center;
`;

export const Textarea = styled.textarea`
  height: 86px;
  resize: none;

  border: 1px solid ${({ theme }) => theme.PALLETE.gray[200]};
  border-radius: 10px;
  padding: 12px;

  ${FONT_STYLE.PRETENDARD.H8_REGULAR};
  color: ${({ theme }) => theme.PALLETE.mainblack};

  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.PALLETE.gray[500]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.PALLETE.primary.main};
  }
`;

export const SendButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 5px;

  border: none;
  cursor: pointer;

  background: ${({ theme }) => theme.PALLETE.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};

  &:hover {
    background: ${({ theme }) => theme.PALLETE.primary.dark ?? "#e8432e"};
  }
`;

export const SendIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const CounterRow = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HelperText = styled.div`
  ${FONT_STYLE.PRETENDARD.H8_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray[500]};
`;

export const CounterText = styled.div`
  ${FONT_STYLE.PRETENDARD.H8_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray[900]};
`;
