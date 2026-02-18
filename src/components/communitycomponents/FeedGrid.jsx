// FeedGrid.jsx
import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import * as S from "../../pages/community/style";
import PostCard from "./PostCard";

const PAGE_SIZE = 12;

const FeedGrid = ({ items = [], onCardClick, meNickname }) => {
  // const allItems = useMemo(
  //   () =>
  //     Array.from({ length: 60 }, (_, i) => ({
  //       id: i + 1,
  //       recipeName: `레시피 ${i + 1}`,
  //     })),
  //   []
  // );

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoading, setIsLoading] = useState(false);
  const sentinelRef = useRef(null);

  const hasMore = visibleCount < items.length;
  const visibleItems = items.slice(0, visibleCount);

  const loadMore = useCallback(() => {
    if (isLoading) return;
    if (!hasMore) return;

    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, items.length));
      setIsLoading(false);
    }, 350);
  }, [isLoading, hasMore, items.length]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { root: null, rootMargin: "200px", threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMore]);

  const buildMockPost = (item) => ({
    id: item.id,
    images: [
      `${process.env.PUBLIC_URL}/assets/images/pancake.svg`,
      `${process.env.PUBLIC_URL}/assets/images/tteokbokki.svg`,
    ],
    author: { nickname: item.nickname ?? "파스타러버", level: item.level ?? 4 },
    likes: item.likes ?? 80,
    createdAt: item.createdAt ?? "2025. 12. 20",
    recipeTitle: item.recipeName ?? "팬케이크",
    content:
      item.desc ??
      "딸기 팬케이크 완성! 반죽이 쫀쫀하고 소스가 진짜 부드러워요. 가족들이 엄청 좋아했습니다",
    ingredients: item.ingredients ?? ["밀가루", "생크림", "파슬리가루"],
    xp: item.xp ?? 120,
    comments: item.comments ?? [
      { nickname: "금손수", time: "2초 전", text: "와 진짜 맛있어 보여요!" },
      { nickname: "요리왕금손수", time: "5분 전", text: "두번째 댓글도 테스트!" },

      // ✅ 여기! 문자열이 아니라 변수로!
      { nickname: meNickname, time: "8분 전", text: "내 댓글 테스트🥲" },

      { nickname: "테스트", time: "8분 전", text: "다른 사람 댓글" },
    ],
  });

  const handleCardClick = (item) => {
    const post = buildMockPost(item);
    onCardClick?.(post);
  };

  return (
    <S.FeedGridSection>
      <S.FeedGridWrap>
        {visibleItems.map((item) => (
          <PostCard
            key={item.id}
            item={item}
            w="100%"
            onClick={() => handleCardClick(item)}
          />
        ))}
      </S.FeedGridWrap>

      <S.FeedGridSentinel ref={sentinelRef} />
      {isLoading && <S.FeedGridLoading>불러오는 중…</S.FeedGridLoading>}
      {!hasMore && <S.FeedGridEnd>마지막 게시물입니다.</S.FeedGridEnd>}
    </S.FeedGridSection>
  );
};

export default FeedGrid;
