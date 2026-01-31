import React, { useMemo, useState } from "react";
import { Container, FullDivider, Page } from "../community/style";
import { CommunityHeader } from "../../components/communitycomponents/CommunityHeader";
import * as S from "./style";
import MyRecipeGrid from "../../components/myrecipecomponents/MyRecipeGrid";
import SortTab from "../../components/myrecipecomponents/SortTab";

// ✅ 마이레시피 정렬 옵션 (요구사항 그대로)
export const MYRECIPE_SORT_OPTIONS = [
  { key: "saved_latest", label: "최신순" },
  { key: "cook_fast", label: "조리 빠른순" },
  { key: "difficulty_low", label: "난이도 낮은순" },
];

// ✅ 더미 데이터(나중에 API로 교체)
const MOCK_SAVED_RECIPES = [
  {
    id: 1,
    title: "김치찌개",
    desc: "목요일엔 만드는 김치찌개",
    rating: 4.8,
    xp: 350,
    cookTimeMin: 50,
    difficulty: "하",
    missingIngredients: "부족한 재료 5개",
    imageUrl: "/assets/images/kimchi_soup.png",
    saved: true,
  },
  {
    id: 2,
    title: "계란찜죽",
    desc: "초간단 든든 레시피",
    rating: 4.8,
    xp: 350,
    cookTimeMin: 30,
    difficulty: "하",
    missingIngredients: "부족한 재료 2개",
    imageUrl: "/assets/images/kimchi_soup.png",
    saved: true,
  },
  {
    id: 3,
    title: "계란찜죽",
    desc: "초간단 든든 레시피",
    rating: 4.8,
    xp: 350,
    cookTimeMin: 30,
    difficulty: "하",
    missingIngredients: "부족한 재료 2개",
    imageUrl: "/assets/images/egg_tuna_soup.png",
    saved: true,
  },
  {
    id: 4,
    title: "계란찜죽",
    desc: "초간단 든든 레시피",
    rating: 4.8,
    xp: 350,
    cookTimeMin: 30,
    difficulty: "하",
    missingIngredients: "부족한 재료 2개",
    imageUrl: "/assets/images/egg_tuna_soup.png",
    saved: true,
  },
  {
    id: 5,
    title: "계란찜죽",
    desc: "초간단 든든 레시피",
    rating: 4.8,
    xp: 350,
    cookTimeMin: 30,
    difficulty: "하",
    missingIngredients: "부족한 재료 2개",
    imageUrl: "/assets/images/egg_tuna_soup.png",
    saved: true,
  },
];

const MyRecipe = () => {
  const isLoggedIn = true;

  const [keyword, setKeyword] = useState("");
  const [sortKey, setSortKey] = useState("saved_latest");
  const [savedList, setSavedList] = useState(MOCK_SAVED_RECIPES);

  const sortLabel = useMemo(() => {
    return (
      MYRECIPE_SORT_OPTIONS.find((o) => o.key === sortKey)?.label ?? "최신순"
    );
  }, [sortKey]);

  const filteredAndSorted = useMemo(() => {
    const q = keyword.trim().toLowerCase();

    let arr = savedList.filter((r) => {
      if (!q) return true;
      return (
        r.title.toLowerCase().includes(q) ||
        (r.desc ?? "").toLowerCase().includes(q) ||
        (r.missingIngredients ?? "").toLowerCase().includes(q)
      );
    });

    arr = [...arr].sort((a, b) => {
      if (sortKey === "saved_latest") return b.id - a.id;
      if (sortKey === "cook_fast")
        return (a.cookTimeMin ?? 9999) - (b.cookTimeMin ?? 9999);
      if (sortKey === "difficulty_low") {
        const rank = { 하: 0, 중: 1, 상: 2 };
        return (rank[a.difficulty] ?? 99) - (rank[b.difficulty] ?? 99);
      }
      return 0;
    });

    return arr;
  }, [savedList, keyword, sortKey]);

  const handleToggleBookmark = (recipeId) => {
    setSavedList((prev) => prev.filter((r) => r.id !== recipeId));
  };

  return (
    <Page>
      <Container>
        <CommunityHeader
          title="저장한 레시피"
          placeholder="요리명, 코멘트, 재료로 검색..."
          showSort={true}
          sortOptions={MYRECIPE_SORT_OPTIONS}
          defaultSortKey={sortKey}
          onSearch={({ keyword: k }) => {
            setKeyword(k);
            console.log("검색", { keyword: k, sortKey });
          }}
        />
      </Container>

      <FullDivider />

      <Container>
        <SortTab
          options={MYRECIPE_SORT_OPTIONS}
          value={sortKey}
          onChange={(key) => {
            setSortKey(key);
            console.log("정렬 변경:", key);
          }}
        />

        {/* ✅ 여기 있던 “✓ 최신순” 줄 삭제했음 */}

        {!isLoggedIn ? (
          <S.EmptyWrap>
            <S.EmptyTitle>
              저장한 레시피는 로그인 시 확인할 수 있습니다.
            </S.EmptyTitle>
          </S.EmptyWrap>
        ) : filteredAndSorted.length === 0 ? (
          <S.EmptyWrap>
            <S.EmptyTitle>저장한 레시피가 없습니다.</S.EmptyTitle>
            <S.EmptyDesc>마음에 드는 요리를 저장해보세요!</S.EmptyDesc>
          </S.EmptyWrap>
        ) : (
          <MyRecipeGrid
            items={filteredAndSorted}
            onCardClick={(id) => {
              console.log("레시피 상세페이지로 이동", id);
            }}
            onToggleBookmark={handleToggleBookmark}
          />
        )}
      </Container>
    </Page>
  );
};

export default MyRecipe;
