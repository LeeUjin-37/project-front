import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import * as S from "./style";

import { CommunityHeader } from "../../components/communitycomponents/CommunityHeader";
import TrendingCarousel from "../../components/communitycomponents/TrendingCarousel";
import FeedGrid from "../../components/communitycomponents/FeedGrid";
import FloatingActions from "../../components/layoutcomponents/FloatingActions";
import CommunityPostModal from "../../components/communitycomponents/CommunityPostModal";

const CommunityMain = () => {
  // 로그인 유저 닉네임 (임시)
  const meNickname = "요리왕곰순";

  const allItems = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i + 1,
        recipeName: `레시피 ${i + 1}`,
      })),
    []
  );

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

      // 여기! 문자열이 아니라 변수로!
      { nickname: meNickname, time: "8분 전", text: "내 댓글 테스트🥲" },

      { nickname: "테스트", time: "8분 전", text: "다른 사람 댓글" },
    ],
  });

  // 모달 상태
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchParams] = useSearchParams();

  // 카드 클릭 → 모달 오픈
  const handleOpenPostModal = useCallback((post) => {
    setSelectedPost(post);
    setIsPostModalOpen(true);
  }, []);

  useEffect(() => {
    const postId = searchParams.get("postId");
    if (!postId) return;

    const idNum = Number(postId);

    const mockPost = {
      id: idNum,
      images: [
        `${process.env.PUBLIC_URL}/assets/images/pancake.svg`,
        `${process.env.PUBLIC_URL}/assets/images/tteokbokki.svg`,
      ],
      author: { nickname: "파스타러버", level: 4 },
      likes: 80,
      createdAt: "2025. 12. 20",
      recipeTitle: `레시피 ${idNum}`,
      content:
        "딸기 팬케이크 완성! 반죽이 쫀쫀하고 소스가 진짜 부드러워요. 가족들이 엄청 좋아했습니다",
      ingredients: ["밀가루", "생크림", "파슬리가루"],
      xp: 120,
      comments: [],
    };

    setSelectedPost(mockPost);
    setIsPostModalOpen(true);
  }, [searchParams]);


  // 모달 닫기
  const handleClosePostModal = useCallback(() => {
    setIsPostModalOpen(false);
    setSelectedPost(null);
  }, []);

  // 댓글 등록
  const handleSubmitComment = useCallback(
    (text) => {
      if (!selectedPost) return;

      const newComment = {
        nickname: meNickname,
        time: "방금 전",
        text,
      };

      setSelectedPost((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          comments: [newComment, ...(prev.comments ?? [])],
        };
      });
    },
    [selectedPost, meNickname]
  );

  // 댓글 수정 (현재 prompt 방식 유지)
  const handleEditComment = useCallback(
    (comment, nextTextFromModal) => {
      if (!selectedPost) return;

      // 모달에서 nextText를 2번째 인자로 넘겨주면 그걸 우선 사용
      const nextText =
        typeof nextTextFromModal === "string"
          ? nextTextFromModal
          : window.prompt("댓글을 수정하세요", comment.text);

      if (nextText === null) return;

      const trimmed = String(nextText).trim();
      if (!trimmed) return;

      setSelectedPost((prev) => {
        if (!prev) return prev;
        const nextComments = (prev.comments ?? []).map((c) =>
          c === comment ? { ...c, text: trimmed, time: "방금 전" } : c
        );
        return { ...prev, comments: nextComments };
      });
    },
    [selectedPost]
  );

  // 댓글 삭제
  const handleDeleteComment = useCallback(
    (comment) => {
      if (!selectedPost) return;

      const ok = window.confirm("댓글을 삭제할까요?");
      if (!ok) return;

      setSelectedPost((prev) => {
        if (!prev) return prev;
        const nextComments = (prev.comments ?? []).filter((c) => c !== comment);
        return { ...prev, comments: nextComments };
      });
    },
    [selectedPost]
  );

  return (
    <S.Page>
      {/* FloatingActions 스크롤 타겟 */}
      <div id="community-top" />

      {/* 1) 헤더는 Container 안 */}
      <S.Container>
        <CommunityHeader
          onSearch={({ keyword, sort }) => {
            console.log("커뮤니티 검색", { keyword, sort });
          }}
        />
      </S.Container>

      <S.FullDivider />

      {/* 2) 트렌딩 + 피드는 Container 안 */}
      <S.Container>
        <TrendingCarousel />
        <S.SectionDivider />

        <FeedGrid items={allItems} onCardClick={handleOpenPostModal} meNickname={meNickname} />
      </S.Container>

      {/* 3) 모달은 Page 하위에 두되,
          화면 레이아웃은 위에서 이미 Container 기준으로 잡힘 */}
      <CommunityPostModal
        open={isPostModalOpen}
        post={selectedPost}
        onClose={handleClosePostModal}
        onClickDetail={(post) => {
          console.log("자세히 보기 클릭", post);
        }}
        meNickname={meNickname}
        onSubmitComment={handleSubmitComment}
        onEditComment={handleEditComment}
        onDeleteComment={handleDeleteComment}
      />

      <FloatingActions targetId="community-top" />
    </S.Page>
  );
};

export default CommunityMain;
