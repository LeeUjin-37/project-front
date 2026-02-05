import React, { useEffect, useMemo, useRef, useState } from "react";
import { Container, FullDivider, Page } from "../community/style";
import { CommunityHeader } from "../../components/communitycomponents/CommunityHeader";
import * as S from "./style";
import MyRecipeGrid from "../../components/myrecipecomponents/MyRecipeGrid";
import SortTab from "../../components/myrecipecomponents/SortTab";
import Pagination from "../../components/layoutcomponents/pagination/Pagination";
import FloatingActions from "../../components/layoutcomponents/FloatingActions";
import MyRecipeEmpty from "../../components/myrecipecomponents/MyRecipeEmpty";

export const MYRECIPE_SORT_OPTIONS = [
  { key: "saved_latest", label: "최신순" },
  { key: "cook_fast", label: "조리 빠른순" },
  { key: "difficulty_low", label: "난이도 낮은순" },
];

const MOCK_SAVED_RECIPES = [
  {
    id: 1,
    title: "김치찌개",
    desc: "목요일엔 만드는 김치찌개",
    rating: 4.8,
    xp: 350,
    cookTimeMin: 50,
    difficulty: "중",
    missingIngredients: "부족한 재료 5개",
    imageUrl: "/assets/images/kimchi_soup.png",
    saved: true,
  },
  {
    id: 2,
    title: "계란찜죽",
    desc: "초간단 든든 레시피",
    rating: 4.3,
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
    rating: 4.5,
    xp: 350,
    cookTimeMin: 45,
    difficulty: "상",
    missingIngredients: "부족한 재료 2개",
    imageUrl: "/assets/images/egg_tuna_soup.png",
    saved: true,
  },
  {
    id: 4,
    title: "계란찜죽",
    desc: "초간단 든든 레시피",
    rating: 4.6,
    xp: 350,
    cookTimeMin: 25,
    difficulty: "하",
    missingIngredients: "부족한 재료 2개",
    imageUrl: "/assets/images/egg_tuna_soup.png",
    saved: true,
  },
  {
    id: 5,
    title: "계란찜죽",
    desc: "초간단 든든 레시피",
    rating: 4.2,
    xp: 350,
    cookTimeMin: 60,
    difficulty: "중",
    missingIngredients: "부족한 재료 2개",
    imageUrl: "/assets/images/egg_tuna_soup.png",
    saved: true,
  },
  {
    id: 6,
    title: "계란찜죽",
    desc: "초간단 든든 레시피",
    rating: 4.7,
    xp: 350,
    cookTimeMin: 15,
    difficulty: "상",
    missingIngredients: "부족한 재료 2개",
    imageUrl: "/assets/images/egg_tuna_soup.png",
    saved: true,
  },
  {
    id: 7,
    title: "계란찜죽",
    desc: "초간단 든든 레시피",
    rating: 4.0,
    xp: 350,
    cookTimeMin: 35,
    difficulty: "하",
    missingIngredients: "부족한 재료 2개",
    imageUrl: "/assets/images/egg_tuna_soup.png",
    saved: true,
  },
  {
    id: 8,
    title: "계란찜죽",
    desc: "초간단 든든 레시피",
    rating: 3.8,
    xp: 350,
    cookTimeMin: 40,
    difficulty: "중",
    missingIngredients: "부족한 재료 2개",
    imageUrl: "/assets/images/egg_tuna_soup.png",
    saved: true,
  },
  {
    id: 9,
    title: "계란찜죽",
    desc: "초간단 든든 레시피",
    rating: 2.5,
    xp: 350,
    cookTimeMin: 20,
    difficulty: "상",
    missingIngredients: "부족한 재료 2개",
    imageUrl: "/assets/images/egg_tuna_soup.png",
    saved: true,
  },
  {
    id: 10,
    title: "계란찜죽",
    desc: "초간단 든든 레시피",
    rating: 4.2,
    xp: 350,
    cookTimeMin: 55,
    difficulty: "하",
    missingIngredients: "부족한 재료 2개",
    imageUrl: "/assets/images/egg_tuna_soup.png",
    saved: true,
  },
  {
    id: 11,
    title: "계란찜죽",
    desc: "초간단 든든 레시피",
    rating: 3.5,
    xp: 350,
    cookTimeMin: 10,
    difficulty: "중",
    missingIngredients: "부족한 재료 2개",
    imageUrl: "/assets/images/egg_tuna_soup.png",
    saved: true,
  },
  {
    id: 12,
    title: "계란찜죽",
    desc: "초간단 든든 레시피",
    rating: 3.0,
    xp: 350,
    cookTimeMin: 33,
    difficulty: "상",
    missingIngredients: "부족한 재료 2개",
    imageUrl: "/assets/images/egg_tuna_soup.png",
    saved: true,
  },
  {
    id: 13,
    title: "계란찜죽",
    desc: "초간단 든든 레시피",
    rating: 4.5,
    xp: 350,
    cookTimeMin: 28,
    difficulty: "하",
    missingIngredients: "부족한 재료 2개",
    imageUrl: "/assets/images/egg_tuna_soup.png",
    saved: true,
  },
  {
    id: 14,
    title: "계란찜죽",
    desc: "초간단 든든 레시피",
    rating: 5.0,
    xp: 350,
    cookTimeMin: 48,
    difficulty: "중",
    missingIngredients: "부족한 재료 2개",
    imageUrl: "/assets/images/egg_tuna_soup.png",
    saved: true,
  },
];

const MyRecipe = () => {
  const isLoggedIn = true; // 로그인 모달 테스트 보고 싶음 false

  const [keyword, setKeyword] = useState("");
  const [sortKey, setSortKey] = useState("saved_latest");
  const [savedList, setSavedList] = useState(MOCK_SAVED_RECIPES);

  const [page, setPage] = useState(1);
  const pageSize = 12;

  // 그리드 상단 스크롤 타겟
  const gridTopRef = useRef(null);

  const compareBySortKey = (a, b) => {
    const tieBreaker = () => b.id - a.id;

    if (sortKey === "saved_latest") return b.id - a.id;

    if (sortKey === "cook_fast") {
      const diff = (a.cookTimeMin ?? 9999) - (b.cookTimeMin ?? 9999);
      return diff !== 0 ? diff : tieBreaker();
    }

    if (sortKey === "difficulty_low") {
      const rank = { 하: 0, 중: 1, 상: 2 };
      const diff = (rank[a.difficulty] ?? 99) - (rank[b.difficulty] ?? 99);
      return diff !== 0 ? diff : tieBreaker();
    }

    return tieBreaker();
  };

  const filteredAndSorted = useMemo(() => {
    const q = keyword.trim().toLowerCase();

    const filtered = savedList.filter((r) => {
      if (!q) return true;
      return (
        r.title.toLowerCase().includes(q) ||
        (r.desc ?? "").toLowerCase().includes(q) ||
        (r.missingIngredients ?? "").toLowerCase().includes(q)
      );
    });

    return [...filtered].sort(compareBySortKey);
  }, [savedList, keyword, sortKey]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredAndSorted.length / pageSize),
  );

  const pagedItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredAndSorted.slice(start, start + pageSize);
  }, [filteredAndSorted, page, pageSize]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  // 검색/정렬 바뀌면 1페이지로
  useEffect(() => {
    setPage(1);
  }, [keyword, sortKey]);

  // 페이지 바뀔 때 그리드 상단으로 자동 스크롤
  useEffect(() => {
    if (!gridTopRef.current) return;
    gridTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [page]);

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
          onSortChange={(opt) => setSortKey(opt.key)}
          onSearch={({ keyword: k }) => setKeyword(k)}
        />
      </Container>

      <FullDivider />

      <Container>
        <SortTab
          options={MYRECIPE_SORT_OPTIONS}
          value={sortKey}
          onChange={(key) => setSortKey(key)}
        />

        {/* 그리드 상단 앵커 */}
        <div ref={gridTopRef} />

        {!isLoggedIn ? (
          <MyRecipeEmpty
            isLoggedIn={isLoggedIn}
            title="저장한 레시피는 로그인 후 확인할 수 있습니다."
            desc="로그인하고 나만의 레시피를 저장해보세요!"
            showCta={true}
          />
        ) : filteredAndSorted.length === 0 ? (
          <MyRecipeEmpty isLoggedIn={isLoggedIn} />
        ) : (
          <>
            <MyRecipeGrid
              items={pagedItems}
              onCardClick={(id) => console.log("레시피 상세페이지로 이동", id)}
              onToggleBookmark={handleToggleBookmark}
            />

            {totalPages > 1 && (
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onChange={setPage}
                leftIconSrc="/assets/icons/left_arrow.svg"
                rightIconSrc="/assets/icons/nextpage_arrow.svg"
              />
            )}
          </>
        )}
      </Container>

      <FloatingActions targetId="community-top" />
    </Page>
  );
};

export default MyRecipe;
