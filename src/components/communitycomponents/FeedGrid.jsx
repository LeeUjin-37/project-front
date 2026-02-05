import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import * as S from "../../pages/community/style";
import PostCard from "./PostCard";
import CommunityPostModal from "./CommunityPostModal"; 

const PAGE_SIZE = 12;

const FeedGrid = () => {
  const allItems = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i + 1,
        // 더미 필드들(없으면 PostCard가 기본값으로 채움)
        recipeName: `레시피 ${i + 1}`,
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
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, allItems.length));
      setIsLoading(false);
    }, 350);
  }, [isLoading, hasMore, allItems.length]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) loadMore();
      },
      { root: null, rootMargin: "200px", threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [loadMore]);

  // ✅ 모달 상태/선택된 게시물
  const [openPostModal, setOpenPostModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  // ✅ 모달에 넣을 목데이터(실제 API 붙으면 item -> post 변환만 해주면 됨)
  const buildMockPost = (item) => ({
    id: item.id,
    images: [`${process.env.PUBLIC_URL}/assets/images/pancake.png`], // 너 이미지 경로로 교체
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
      { nickname: "요리왕금손수", time: "2초 전", text: "와 진짜 맛있어 보여요! 저도 도전해봐야겠어요ㅋㅋ" },
      { nickname: "요리왕금손수", time: "2초 전", text: "와 진짜 맛있어 보여요! 저도 도전해봐야겠어요ㅋㅋ" },
    ],
  });

  const handleCardClick = (item) => {
    setSelectedPost(buildMockPost(item));
    setOpenPostModal(true);
  };

  return (
    <S.FeedGridSection>
      <S.FeedGridWrap>
        {visibleItems.map((item) => (
          <PostCard
            key={item.id}
            item={item}
            w="100%"
            onClick={() => handleCardClick(item)} // ✅ 여기서 연결
          />
        ))}
      </S.FeedGridWrap>

      <S.FeedGridSentinel ref={sentinelRef} />

      {isLoading && <S.FeedGridLoading>불러오는 중…</S.FeedGridLoading>}
      {!hasMore && <S.FeedGridEnd>마지막 게시물입니다.</S.FeedGridEnd>}

      {/* ✅ 모달은 리스트 밖(딱 1개만 렌더) */}
      <CommunityPostModal
        open={openPostModal}
        post={selectedPost}
        onClose={() => setOpenPostModal(false)}
        onClickDetail={() => console.log("자세히 보기")}
        onSubmitComment={(text) => console.log("댓글 전송:", text)}
      />
    </S.FeedGridSection>
  );
};

export default FeedGrid;
