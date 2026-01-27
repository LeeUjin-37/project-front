import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddIngredientModal from "../../components/myfridgecomponents/AddIngredientModal";
import IngredientList from "../../components/myfridgecomponents/IngredientList";
import AddIngredientDetailModal from "../../components/myfridgecomponents/AddIngredientDetailModal";
import {
  CategoryRow,
  EmptyWrapper,
  FridgeButtonGroup,
  FridgeHeader,
  FridgeHeaderInner,
  FridgeHeaderSection,
  FridgeTitle,
  FridgeTopSection,
  LayoutAddButton,
  LayoutCategoryTab,
  MyFridgeContainer,
  TopFixedSection,
  TopInfoRow,
} from "./style";

const MyFridge = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("전체");
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleAddIngredients = (newItems) => {
    setIngredients((prev) => [
      ...prev,
      ...newItems.map((item) => ({
        ...item,
        fridgeId: Date.now() + Math.random(), // 고유 ID
      })),
    ]);
  };

  return (
    <>
      {/* ================= 상단 영역 ================= */}
      <FridgeHeaderSection>
        <FridgeHeaderInner>
          <TopFixedSection>
            <FridgeHeader>
              <FridgeTitle>나의 냉장고</FridgeTitle>
            </FridgeHeader>
            {/* 카테고리 + 버튼 같은 줄 */}
            <CategoryRow>
              <LayoutCategoryTab
                active={activeCategory === "전체"}
                onClick={() => setActiveCategory("전체")}
              >
                전체
              </LayoutCategoryTab>
              <LayoutCategoryTab>채소</LayoutCategoryTab>
              <LayoutCategoryTab>육류</LayoutCategoryTab>
              <LayoutCategoryTab>해산물</LayoutCategoryTab>
              <LayoutCategoryTab>유제품</LayoutCategoryTab>
              <LayoutCategoryTab>가공품</LayoutCategoryTab>
              <LayoutCategoryTab>기타</LayoutCategoryTab>
            </CategoryRow>
            <FridgeButtonGroup>
              <LayoutAddButton onClick={() => setIsAddOpen(true)}>
                재료 추가
              </LayoutAddButton>

              <LayoutAddButton
                onClick={() => {
                  setIsDeleteMode((prev) => !prev);
                  setSelectedIds([]);
                }}
              >
                재료 삭제
              </LayoutAddButton>
              {isDeleteMode && (
                <LayoutAddButton
                  onClick={() => {
                    setIngredients((prev) =>
                      prev.filter(
                        (item) => !selectedIds.includes(item.fridgeId),
                      ),
                    );
                    setSelectedIds([]);
                    setIsDeleteMode(false);
                  }}
                >
                  삭제 확인
                </LayoutAddButton>
              )}

              <LayoutAddButton>재료 수정</LayoutAddButton>
            </FridgeButtonGroup>
          </TopFixedSection>
        </FridgeHeaderInner>
      </FridgeHeaderSection>

      {/* 추천 영역 */}
      <FridgeTopSection>
        <TopInfoRow>
          <div>
            {/* <img
              className="myFridgeBannerImg"
              src={`${process.env.PUBLIC_URL}/assets/images/.png`}
              alt="나의냉장고_배너"
            /> */}
            현재 재료로 추천 요리를 확인해보세요!
            <Link to="/foodrecommendation">
              <button>추천 요리 보기</button>
            </Link>
          </div>
          <div>
            <span>일반순</span>
            <span>최신순</span>
            <span>☰</span>
          </div>
        </TopInfoRow>
      </FridgeTopSection>
      {/* ================= 하단 리스트 영역 ================= */}
      <MyFridgeContainer>
        {ingredients.length === 0 && !isAddOpen && (
          <EmptyWrapper>
            <AddIngredientModal onNext={() => setIsAddOpen(true)} />
          </EmptyWrapper>
        )}

        {ingredients.length > 0 && (
          <IngredientList
            items={ingredients}
            deleteMode={isDeleteMode}
            selectedIds={selectedIds}
            onToggle={(fridgeId) =>
              setSelectedIds((prev) =>
                prev.includes(fridgeId)
                  ? prev.filter((v) => v !== fridgeId)
                  : [...prev, fridgeId],
              )
            }
          />
        )}

        {isAddOpen && (
          <AddIngredientDetailModal
            onClose={() => setIsAddOpen(false)}
            onSubmit={handleAddIngredients}
          />
        )}
      </MyFridgeContainer>
    </>
  );
};

export default MyFridge;
