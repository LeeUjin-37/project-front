import styled from "styled-components";
import { FONT_STYLE } from "../../styles/common";

const S = {};

/* ===================================================
   기본 페이지 구조 (커뮤니티와 동일)
=================================================== */

S.Page = styled.main`
  width: 100%;
  min-height: 100vh;
  background: #fff;
`;

S.Container = styled.div`
  max-width: 1420px;
  margin: 0 auto;
  padding: 24px 0 80px;

  @media (max-width: 1920px) {
    width: 100%;
    padding: 24px 20px 80px;
  }
`;

/* ===================================================
   상단 섹션 (커뮤니티와 동일)
=================================================== */

S.HeaderSection = styled.section`
  width: 100%;
  margin-top: 68px;
  padding-bottom: 24px;
`;

S.SectionTitle = styled.h2`
  ${FONT_STYLE.GIANTS.H7_REGULAR};
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 12px;
`;

/* 검색 + 정렬 Row */
S.SearchRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* 검색 박스 */
S.SearchWrap = styled.div`
  position: relative;
  width: 1028px;
  height: 40px;
`;

S.SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 44px 0 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-family: "Pretendard";
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border: 1px solid #ff4d37;
  }
`;

S.SearchButton = styled.button`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
`;

S.SearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;

/* 정렬 버튼 */
S.SortButton = styled.button`
  height: 40px;
  padding: 0 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: #fff;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    border-color: #999;
  }
`;

/* ===================================================
   구분선 (커뮤니티 동일)
=================================================== */

S.FullDivider = styled.div`
  width: 100%;
  height: 1px;
  margin: 30px 0 0;
  background-color: #eee;
`;

/* ===================================================
   그리드 (기존 유지)
=================================================== */

S.FeedGridSection = styled.section`
  width: 100%;
  margin-top: 52px;
  padding-bottom: 24px;
`;

S.FeedGridWrap = styled.div`
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

S.Title = styled.h6`
  font-size: 18px;
  font-weight: 700;
`;

S.DropdownWrap = styled.div`
  position: relative;
`;

S.FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
`;

S.FilterIcon = styled.img`
  width: 20px;
`;

S.DropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 6px;
`;

S.DropdownItem = styled.button`
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: transparent;
  text-align: left;
`;


export default S;
