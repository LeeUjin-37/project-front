import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../styles/common";


/* =========================
   나의 냉장고 상단 배경 섹션
========================= */
export const FridgeHeaderSection = styled.div`
  width: 100%;
  background-color: #FFF9F5;   // 시안 톤
`;

// 안쪽 정렬용 레퍼
export const FridgeHeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 32px;
`;

/* =========================
   페이지 타이틀 폰트
========================= */

export const FridgeTitle = styled.h2`
  margin: 0 auto 24px auto;
  width: 100%;
  text-align: center;
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.REGULAR};
  color: #111111;
`;



/* ====================
      공통 버튼
=================== */

// Empty 화면, 모달 등에서 사용하는 메인 버튼
export const AddButton = styled.button`
  width: 298px;
  height: 56px;

  border: 1px solid #FF4D26;
  border-radius: 5px;
  background-color: transparent;

  ${flexCenter}

  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD};

  color: #262626;
  cursor: pointer;
`;

// 상단 "재료 추가 / 삭제 / 수정" 버튼
export const LayoutAddButton = styled.button`
  width: 87px;
  height: 36px;

  border: 1px solid #FF4D26;
  border-radius: 5px;
  background-color: transparent;

  ${flexCenter}

  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.BOLD};

  color: #262626;
  cursor: pointer;
`;


/* ==================================================
   1. MyFridge 페이지 전체 레이아웃
================================================== */

// 페이지 최상위 컨테이너
// - 최대 폭 1200px
// - 화면 중앙 정렬
export const MyFridgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

/* ==================================================
   2. 상단 고정 영역 (헤더 / 카테고리 / 정렬)
================================================== */

// 헤더 + 카테고리 + 정렬 영역 wrapper
export const TopFixedSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;
`;

// "나의 냉장고" 타이틀 + 버튼 영역
export const FridgeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF9F5;
  `;

// 재료 추가 / 삭제 / 수정 버튼 묶음
export const FridgeButtonGroup = styled.div`
  margin-left: auto;   // 오른쪽 끝으로 밀기
  display: flex;
  gap: 8px;
`;

// 헤더 아래 (카테고리 + 추천/정렬)
export const FridgeTopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

/* ------------------
   카테고리 탭
------------------ */

// 카테고리 버튼 줄
export const CategoryRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
  flex-wrap: wrap;
`;

// 나의 냉장고 전체,채소,육류,해산물,유제품,가공품,기타 카테고리 버튼
export const LayoutCategoryTab = styled.button`
  width: 90px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: none;
  font-size: 15.8px;
  font-weight: 500;
  cursor: pointer;

  background-color: ${({ active }) =>
    active ? "#FF6B4A" : "#E0E0E0"};

  color: ${({ active }) =>
    active ? "#FFFFFF" : "#777777"};
`;

/* ------------------
   추천 / 정렬 영역
------------------ */

export const TopInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* ==================================================
   3. Empty 상태 (재료 없을 때)
================================================== */

export const EmptyWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: calc(100vh - 260px);
`;

/* ==================================================
   4. 재료 카드 & Grid
================================================== */

/* ------------------
   카드 Hover 정보
------------------ */

export const HoverInfo = styled.div`
  position: absolute;
  top: -8px;
  left: 105%;
  width: 180px;

  background-color: #ffffff;
  border: 1px solid #ff4e37;
  border-radius: 8px;
  padding: 12px;

  font-size: 12px;
  color: #262626;
  line-height: 1.4;

  opacity: 0;
  transform: translateY(6px);
  pointer-events: none;

  transition: all 0.2s ease;
  z-index: 20;
`;

/* ------------------
   재료 카드
------------------ */

export const CardStyle = styled.div`
  position: relative;
  ${flexCenterColumn}

  height: 120px;
  border-radius: 10px;
  background-color: #fff;
  box-sizing: border-box;

  border: 2px solid
    ${({ active }) => (active ? "#FF4E37" : "#E9E9EC")};

  &:hover ${HoverInfo} {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardTextStyle = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) =>
    theme.FONT_WEIGHT.PRETENDARD.LIGHT};
`;

export const IconStyle = styled.div`
  font-size: 32px;
  margin-bottom: 8px;
`;

/* ------------------
   재료 카드 Grid
------------------ */

// Grid 전체 폭 wrapper
export const GridWrapperStyle = styled.div`
  width: 1420px;
  margin: 0 auto;
`;

// 실제 Grid
export const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 16px;
`;

/* ==================================================
   5. 모달 공통
================================================== */

// 화면 전체 오버레이
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.5);
  ${flexCenter}

  z-index: 1000;
`;

// 모달 본체
export const ModalContent = styled.div`
  width: 920px;
  height: 720px;

  background-color: #fff;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
`;

/* ==================================================
   6. AddIngredientDetailModal 전용
================================================== */

// 상단 카테고리 탭 영역
export const ModalHeader = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

// 카테고리 버튼
export const CategoryTab = styled.button`
  width: 180px;
  height: 64px;

  border: none;
  ${flexCenter}

  background-color: ${({ active }) =>
    active ? "#FFFFFF" : "#DDDDDD"};

  color: ${({ active }) =>
    active ? "#FF4E37" : "#898989"};

  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  font-weight: ${({ theme }) =>
    theme.FONT_WEIGHT.PRETENDARD.MEDIUM};

  cursor: pointer;
  transition: all 0.2s ease;
`;

// 모달 Body
export const ModalBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

// 재료 선택 Grid
export const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 127.64px);
  gap: 16px;

  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;

  padding: 16px 0;
`;

/* ------------------
   선택된 재료 리스트
------------------ */

export const SelectedHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const SelectedRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

export const SelectedSection = styled.div`
  border-top: 1px solid #E9E9EC;
  padding-top: 16px;
`;

/* ------------------
   모달 하단 버튼
------------------ */

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
