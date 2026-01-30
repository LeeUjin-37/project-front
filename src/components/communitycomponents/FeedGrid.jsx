
import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import * as S from "../../pages/community/style";
import PostCard from "./PostCard";
// 그리드 + 무한스크롤

// grid layout
// 4열 / 3열 반응형
// 무한스크롤
// PostCard 반복 렌더링

const PAGE_SIZE = 12;

const FeedGrid = () => {
  // 더미 데이터 (나중에 API 붙이면: page/cursor로 교체)
  const allItems = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i + 1,
        // 필요하면 더미 필드 추가 가능
        // recipeName: `레시피 ${i + 1}`,
      })),
    []
  );

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoading, setIsLoading] = useState(false);

  const sentinelRef = useRef(null);

  const hasMore = visibleCount < allItems.length;
  const visibleItems = allItems.slice(0, visibleCount);

  const loadMore = useCallback(() => {
    if (isLoading) return;
    if (!hasMore) return;

    setIsLoading(true);

    //  API 붙기 전까지는 “로딩 흉내”
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, allItems.length));
      setIsLoading(false);
    }, 350);
  }, [isLoading, hasMore, allItems.length]);

  // 무한 스크롤 (IntersectionObserver)
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) loadMore();
      },
      {
        root: null,
        rootMargin: "200px", // 바닥 닿기 전에 미리 로드
        threshold: 0,
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [loadMore]);

  return (
    <S.FeedGridSection>
      <S.FeedGridWrap>
        {visibleItems.map((item) => (
          <PostCard key={item.id} item={item} w="100%" />
        ))}
      </S.FeedGridWrap>

      {/* sentinel (바닥 감지) */}
      <S.FeedGridSentinel ref={sentinelRef} />

      {/* 로딩 텍스트 */}
      {isLoading && <S.FeedGridLoading>불러오는 중…</S.FeedGridLoading>}
      {!hasMore && <S.FeedGridEnd>마지막 게시물입니다.</S.FeedGridEnd>}
    </S.FeedGridSection>
  );
};

export default FeedGrid;
