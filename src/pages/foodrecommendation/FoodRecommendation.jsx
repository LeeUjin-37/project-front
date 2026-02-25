import React, { useEffect, useRef, useState } from "react";
import S from "./style";
import { useNavigate } from "react-router-dom";

import MyRecipeCard from "../../components/myrecipecomponents/MyRecipeCard";

const FoodRecommendation = () => {
  const SORT_OPTIONS = [
    { key: "latest", label: "최신순" },
    { key: "popular", label: "인기순" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState(SORT_OPTIONS[0]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSort(option);
    setIsOpen(false);
  };

  const navigate = useNavigate(); // 훅은 컴포넌트 안에서 호출해야 합니다.

  const [recipes] = useState(
    Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      title: "김치찌개",
      desc: "매콤하고 얼큰한 김치찌개",
      rating: 4.8,
      xp: 350,
      cookTimeMin: 50,
      missingIngredients: 2,
      imageUrl: "/assets/images/kimchi_soup.png",
      saved: false,
    })),
  );

  const handleClickCard = (item) => {
    // 라우터가 /foodrecommendation 아래에 "recommendRecipe/:foodId" 로 잡혀있으니
    //    실제 이동 경로는 /foodrecommendation/recommendRecipe/ID
    navigate(`/foodrecommendation/recommendRecipe/${item.id}`, {
      state: { recipe: item },
    });
  };

  return (
    <S.Page>
      <S.Container>
        <S.HeaderSection>
          <S.SectionTitle>오늘의 추천요리</S.SectionTitle>

          <S.SearchRow>
            <S.SearchWrap>
              <S.SearchInput placeholder="요리명, 재료로 검색..." />
              <S.SearchButton type="button">
                <S.SearchIcon src="/assets/icons/search.svg" alt="검색" />
              </S.SearchButton>
            </S.SearchWrap>

            <S.DropdownWrap ref={dropdownRef}>
              <S.SortButton
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <S.FilterIcon
                  src="/assets/icons/filter.svg"
                  alt="정렬 아이콘"
                />
                {sort.label}
              </S.SortButton>

              {isOpen && (
                <S.DropdownMenu>
                  {SORT_OPTIONS.map((opt) => (
                    <S.DropdownItem
                      key={opt.key}
                      $active={opt.key === sort.key}
                      onClick={() => handleSelect(opt)}
                    >
                      {opt.label}
                    </S.DropdownItem>
                  ))}
                </S.DropdownMenu>
              )}
            </S.DropdownWrap>
          </S.SearchRow>
        </S.HeaderSection>
      </S.Container>

      <S.FullDivider />

      <S.Container>
        <S.FeedGridSection>
          <S.FeedGridWrap>
            {recipes.map((item) => (
              <MyRecipeCard
                key={item.id}
                item={item}
                onClick={() => handleClickCard(item)}
              />
            ))}
          </S.FeedGridWrap>
        </S.FeedGridSection>
      </S.Container>
    </S.Page>
  );
};

export default FoodRecommendation;
