import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../styles/common";

/* =========================
   페이지 전체 레이아웃
========================= */

// MyFridge 페이지 최상위 wrapper
export const Page = styled.main`
  width: 100%;
  min-height: 100vh;  // 화면 높이 최소 100%
  background: ${({ theme }) => theme.PALLETE.background.white};
`;

// 페이지 내부 컨텐츠 중앙 정렬용 wrapper
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  // 가로 중앙 정렬
  gap: 24px;            // 내부 요소 간 간격
  padding-top: 200px;   // 상단 여백 (헤더 고려)
`;


/* =========================
   메인 버튼
========================= */

// "냉장고를 채워볼까요?" 버튼
export const AddButton = styled.button`
  width: 298px;
  height: 56px;

  border: 1px solid #FF4D26;
  border-radius: 5px;
  background-color: transparent;

  ${flexCenter}         // 내부 텍스트 가로/세로 중앙

  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD};

  color: #262626;
  cursor: pointer;
`;


/* =========================
   재료 카드 (Grid 내부)
========================= */

// 재료 카드 박스 스타일
export const CardStyle = styled.div`
  ${flexCenterColumn}   // 아이콘 + 텍스트 세로 정렬
  height: 120px;        // 카드 높이 고정
  border-radius: 10px;
  background-color: #fff;
  box-sizing: border-box;
  border: solid #E9E9EC 1px;

  /* 기본 / 선택 border */
  border: 2px solid
    ${({ active }) => (active ? '#FF4E37' : '#E9E9EC')};
`;


// 재료 카드 텍스트 (이름)
export const CardTextStyle = styled.p`
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.LIGHT};
`;


// 재료 카드 아이콘 영역
export const IconStyle = styled.div`
  font-size: 32px;
  margin-bottom: 8px;
`;


/* =========================
   재료 카드 Grid (페이지)
========================= */

// Grid 전체 폭을 잡아주는 wrapper
export const GridWrapperStyle = styled.div`
  width: 1420px;
  margin: 0 auto; // 화면 가운데 정렬
`;

// 재료 카드 Grid
export const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr); // 한 줄에 카드 10개
  gap: 16px;
`;


/* =========================
   모달 공통 (배경 + 컨테이너)
========================= */

// 화면 전체를 덮는 반투명 배경
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  ${flexCenter}         // 모달을 화면 중앙에 배치
  z-index: 1000;
`;

// 모달 박스 본체 (공통 컨테이너)
export const ModalContainer = styled.div`
  width: 920px;
  height: 720px;
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;

  display: flex;
  flex-direction: column; // Header / Body / Footer 세로 배치
`;


/* =========================
   AddIngredientDetailModal
========================= */

// 카테고리 탭 영역 wrapper
export const ModalHeader = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

// 카테고리 선택 버튼
export const CategoryTab = styled.button`
  width: 180px;     // 디자인 기준 가로
  height: 64px;     // 디자인 기준 세로
  border: none;

   /* 활성 / 비활성 배경색 */
  background-color: ${({ active }) => active ? '#FFFFFF' : '#DDDDDD'};

  color: ${({ active }) => (active ? '#FF4E37' : '#898989')};

  ${flexCenter}

  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.MEDIUM};

  cursor: pointer;
  transition: all 0.2s ease; // 클릭 시 부드러운 전환
`;

// 모달 내부 전체 레이아웃 컨테이너
export const ModalContent = styled.div`
  width: 920px;
  height: 720px;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

// Header 아래, Grid + 선택 영역을 감싸는 body
export const ModalBody = styled.div`
  flex: 1;                 // 남은 높이 전부 사용
  display: flex;
  flex-direction: column;
  padding: 24px;
`;


/* =========================
   재료 선택 Grid (스크롤 영역)
========================= */

// 재료 카드 grid 영역 (스크롤 대상)
export const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 127.64px); /* 카드 크기 고정 */
  gap: 16px;
  flex: 1;
  overflow-y: auto;     /* 세로 스크롤 */
  overflow-x: hidden;   /* 가로 스크롤 제거 */
  padding: 16px 0;
`;


/* =========================
   선택된 재료 리스트
========================= */

// 선택된 재료 전체 영역
export const SelectedList = styled.div`
  border-top: 1px solid #E9E9EC;
  padding-top: 16px;
`;

// 선택 목록 헤더 (재료명 / 수량 / 유통기한)
export const SelectedHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  font-weight: 600;
  margin-bottom: 8px;
`;

// 선택된 재료 한 줄
export const SelectedRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

// 선택 영역 wrapper (테이블 전체)
export const SelectedSection = styled.div`
  border-top: 1px solid #E9E9EC;
  padding-top: 16px;
`;


/* =========================
   모달 하단 버튼
========================= */

// 하단 버튼 중앙 정렬 영역
export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;










