import styled from "styled-components";
import { FONT_STYLE } from "../../styles/common";

const S = {};

// ===== 페이지 =====
S.Page = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.PALLETE.background.white};
`;

// ===== 컨테이너 =====
S.Container = styled.div`
  max-width: 1420px;
  margin: 0 auto;
  padding: 24px 0 80px;

  @media (max-width: 1920px) {
    width: 100%;
    padding: 24px 20px 80px;
  }
`;

// ===== 헤더 영역 (CommunityMain과 동일 구조) =====
S.HeaderSection = styled.section`
  width: 100%;
  margin-top: 68px;
  padding-bottom: 24px;
  padding-left: 130px;
  padding-right: 130px;
`;

// ===== 타이틀 =====
S.Title = styled.h6`
  ${FONT_STYLE.GIANTS.H6_REGULAR};
  color: ${({ theme }) => theme.PALLETE.mainblack};
    text-align: center;
  margin-bottom: 16px;
`;

// ===== 구분선 =====
S.FullDivider = styled.div`
  width: 100%;
  height: 1px;
  margin: 30px 0 0;
  background-color: ${({ theme }) => theme.PALLETE.gray[100]};
`;

// ===== 피드 영역 =====
S.FeedGridSection = styled.section`
  width: 100%;
  margin-top: 52px;
  padding-bottom: 24px;
`;

// ===== 빈 상태 =====
S.EmptyText = styled.p`
  margin-top: 60px;
  text-align: center;
  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray[700]};
`;

export default S;