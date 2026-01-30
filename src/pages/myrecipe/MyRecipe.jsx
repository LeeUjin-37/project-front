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
        imageUrl: "./assets/images/kimchi_soup.png",

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
    imageUrl: "./assets/images/kimchi_soup.png",
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
        imageUrl: "/assets/images/egg_tuna_soup.png",

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
    imageUrl: "/assets/images/egg_tuna_soup.png",
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
        imageUrl: "/assets/images/egg_tuna_soup.png",

    saved: true,
  },
];

const MyRecipe = () => {
  // 실제론 auth store에서 가져오면 됨 (예: useAuthStore().isLogin)
  const isLoggedIn = true;

  // 검색어
  const [keyword, setKeyword] = useState("");

  // 정렬 상태: 이것 하나로 드랍다운/탭/정렬/표시를 전부 통일
  const [sortKey, setSortKey] = useState("saved_latest");

  // 저장 리스트(북마크 해제 시 즉시 제거되므로 state로 관리)
  const [savedList, setSavedList] = useState(MOCK_SAVED_RECIPES);

  const sortLabel = useMemo(() => {
    return MYRECIPE_SORT_OPTIONS.find((o) => o.key === sortKey)?.label ?? "최신순";
  }, [sortKey]);

  const filteredAndSorted = useMemo(() => {
    // 1) 검색
    const q = keyword.trim().toLowerCase();
    let arr = savedList.filter((r) => {
      if (!q) return true;
      return (
        r.title.toLowerCase().includes(q) ||
        (r.desc ?? "").toLowerCase().includes(q) ||
        (r.missingIngredients ?? "").toLowerCase().includes(q)
      );
    });

    // 2) 정렬
    arr = [...arr].sort((a, b) => {
      if (sortKey === "saved_latest") return b.id - a.id; // 더미: id가 최신이라고 가정
      if (sortKey === "cook_fast") return (a.cookTimeMin ?? 9999) - (b.cookTimeMin ?? 9999);
      if (sortKey === "difficulty_low") {
        const rank = { 하: 0, 중: 1, 상: 2 };
        return (rank[a.difficulty] ?? 99) - (rank[b.difficulty] ?? 99);
      }
      return 0;
    });

    return arr;
  }, [savedList, keyword, sortKey]);

  // 저장 해제(북마크 클릭) → 즉시 제거 + 자동 재정렬
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
          onSortChange={(opt) => setSortKey(opt.key)} // 드랍다운 선택 → sortKey 변경
          onSearch={({ keyword: k }) => {
            setKeyword(k); // ✅ 검색어 state에 반영
            console.log("검색", { keyword: k, sortKey });
          }}
        />
      </Container>

      <FullDivider />

      <Container>
        {/* 오른쪽 정렬 탭: sortKey와 동일하게 움직이게 */}
        <SortTab
          options={MYRECIPE_SORT_OPTIONS}
          value={sortKey}
          onChange={(key) => {
            setSortKey(key);
            console.log("정렬 변경:", key);
          }}
        />

        {/* “체크 + 현재 선택 표시” 줄 */}
        <S.SortHintRow>
          <S.SortHintCheck>✓</S.SortHintCheck>
          <S.SortHintTextActive>{sortLabel}</S.SortHintTextActive>
        </S.SortHintRow>

        {/* 비로그인 */}
        {!isLoggedIn ? (
          <S.EmptyWrap>
            <S.EmptyTitle>저장한 레시피는 로그인 시 확인할 수 있습니다.</S.EmptyTitle>
          </S.EmptyWrap>
        ) : filteredAndSorted.length === 0 ? (
          // Empty State
          <S.EmptyWrap>
            <S.EmptyTitle>저장한 레시피가 없습니다.</S.EmptyTitle>
            <S.EmptyDesc>마음에 드는 요리를 저장해보세요!</S.EmptyDesc>
          </S.EmptyWrap>
        ) : (
          <MyRecipeGrid
            items={filteredAndSorted}
            onCardClick={(id) => {
              // 레시피 상세 페이지 이동(라우트는 우리 프로젝트 기준으로 바꾸기)
              // navigate(`/foodrecommendation/recommendRecipe/${id}`);
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
