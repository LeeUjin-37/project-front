// ✅ 다른 사람 글 클릭 => CommunityPostModal
// ✅ 내 글 클릭 => MyPostModal
import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import * as S from "./style";

import { CommunityHeader } from "../../components/communitycomponents/CommunityHeader";
import TrendingCarousel from "../../components/communitycomponents/TrendingCarousel";
import FeedGrid from "../../components/communitycomponents/FeedGrid";
import FloatingActions from "../../components/layoutcomponents/FloatingActions";

import CommunityPostModal from "../../components/communitycomponents/CommunityPostModal";
import MyPostModal from "../../components/communitycomponents/MyPostModal";

import usePostStore from "../../store/postStore";
import useAuthStore from "../../store/authStore";

const CommunityMain = () => {
  // 로그인 유저 닉네임 (임시)
  // const meNickname = "요리왕곰순";

  const [searchParams] = useSearchParams();

  // ===== 피드용 mock items =====
  // const allItems = useMemo(() => {
  //   return Array.from({ length: 60 }, (_, i) => ({
  //     id: i + 1,
  //     recipeName: `레시피 ${i + 1}`,
  //     // ✅ 내 글 테스트: 7개 중 1개는 내 닉네임으로
  //     nickname: i % 7 === 0 ? meNickname : "파스타러버",
  //     level: i % 7 === 0 ? 5 : 4,
  //     likes: 30 + (i % 10) * 7,
  //   }));
  // }, [meNickname]);

  const { posts } = usePostStore();
  const { user } = useAuthStore();

  const meNickname = user?.nickname || "요리왕곰순";

  // postStore 연결
  const allItems = useMemo(() => {
    return posts.map((post) => ({
      id: post.id,
      // recipeName: post.title,
      // nickname: post.nickname,
      // images: [post.imageUrl],
      // level: 1,
      recipeName: post.recipeTitle, // ✅ 수정
      nickname: post.author?.nickname, // ✅ 수정
      level: post.author?.level ?? 1, // ✅ 수정
      images: post.images ?? [], // ✅ 수정
      likes: post.likes ?? 0,
      content: post.content,
      ingredients: post.ingredients ?? [],
      createdAt: post.createdAt,
      comments: post.comments ?? [],
    }));
  }, [posts]);

  // ===== mock post builder =====
  // const buildMockPost = useCallback(
  //   (item) => ({
  //     id: item.id,
  //     images: [
  //       `${process.env.PUBLIC_URL}/assets/images/pancake.svg`,
  //       `${process.env.PUBLIC_URL}/assets/images/carrot_laffe.svg`,
  //     ],
  //     author: {
  //       nickname: item.nickname ?? "파스타러버",
  //       level: item.level ?? 4,
  //     },
  //     likes: item.likes ?? 80,
  //     createdAt: item.createdAt ?? "2025. 12. 20",
  //     recipeTitle: item.recipeName ?? "팬케이크",
  //     content:
  //       item.desc ??
  //       "딸기 팬케이크 완성! 반죽이 쫀쫀하고 소스가 진짜 부드러워요. 가족들이 엄청 좋아했습니다.",
  //     ingredients: item.ingredients ?? ["밀가루", "생크림", "파슬리가루"],
  //     xp: item.xp ?? 120,
  //     comments: item.comments ?? [
  //       { nickname: "금손수", time: "2초 전", text: "와 진짜 맛있어 보여요!" },
  //       { nickname: "요리왕금손수", time: "5분 전", text: "두번째 댓글도 테스트!" },
  //       { nickname: meNickname, time: "8분 전", text: "내 댓글 테스트🥲" },
  //       { nickname: "테스트", time: "8분 전", text: "다른 사람 댓글" },
  //     ],
  //   }),
  //   [meNickname]
  // );

  // ✅ 수정
  const buildMockPost = useCallback(
    (item) => ({
      id: item.id,
      images: item.images ?? [],
      author: {
        nickname: item.nickname,
        level: item.level ?? 1,
      },
      likes: item.likes ?? 0,
      createdAt: item.createdAt ?? "방금 전",
      recipeTitle: item.recipeName,
      content: item.content,
      ingredients: item.ingredients ?? [],
      xp: 0,
      comments: item.comments ?? [],
    }),
    [],
  );

  // ===== 모달 상태(2개) =====
  const [isOtherPostModalOpen, setIsOtherPostModalOpen] = useState(false);
  const [isMyPostModalOpen, setIsMyPostModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  // ===== 내 글인지 판별 =====
  // const isMinePost = useCallback(
  //   (post) => {
  //     const authorNick = String(post?.author?.nickname ?? "").trim();
  //     const me = String(meNickname ?? "").trim();
  //     return !!authorNick && !!me && authorNick === me;
  //   },
  //   [meNickname]
  // );

  // ===== 카드 클릭 => 내 글이면 MyPostModal / 아니면 CommunityPostModal =====
  // const handleOpenAnyPostModal = useCallback(
  //   (post) => {
  //     setSelectedPost(post);

  //     if (isMinePost(post)) {
  //       setIsMyPostModalOpen(true);
  //       setIsOtherPostModalOpen(false);
  //     } else {
  //       setIsOtherPostModalOpen(true);
  //       setIsMyPostModalOpen(false);
  //     }
  //   },
  //   [isMinePost]
  // );

  // ✅ 수정 : 교체 코드
  const handleOpenAnyPostModal = useCallback(
    (item) => {
      const post = buildMockPost(item); // 🔥 여기서 구조 변환

      setSelectedPost(post);

      if (post.author.nickname === meNickname) {
        setIsMyPostModalOpen(true);
        setIsOtherPostModalOpen(false);
      } else {
        setIsOtherPostModalOpen(true);
        setIsMyPostModalOpen(false);
      }
    },
    [buildMockPost, meNickname],
  );

  const handleCloseModals = useCallback(() => {
    setIsOtherPostModalOpen(false);
    setIsMyPostModalOpen(false);
    setSelectedPost(null);
  }, []);

  // ===== 쿼리스트링으로 모달 열기 (postId) =====
  useEffect(() => {
    const postId = searchParams.get("postId");
    if (!postId) return;

    const idNum = Number(postId);
    if (!Number.isFinite(idNum)) return;

    const item = {
      id: idNum,
      recipeName: `레시피 ${idNum}`,
      nickname: idNum % 7 === 0 ? meNickname : "파스타러버", // ✅ 테스트용
      level: 4,
      likes: 80,
    };

    const mockPost = buildMockPost(item);
    handleOpenAnyPostModal(mockPost);
  }, [searchParams, buildMockPost, handleOpenAnyPostModal, meNickname]);

  // ===== 댓글 등록 =====
  const handleSubmitComment = useCallback(
    (text) => {
      const trimmed = String(text ?? "").trim();
      if (!trimmed) return;

      setSelectedPost((prev) => {
        if (!prev) return prev;
        const newComment = {
          nickname: meNickname,
          time: "방금 전",
          text: trimmed,
        };
        return { ...prev, comments: [newComment, ...(prev.comments ?? [])] };
      });
    },
    [meNickname],
  );

  // ===== 댓글 수정 =====
  const handleEditComment = useCallback((comment, nextTextFromModal) => {
    const nextText =
      typeof nextTextFromModal === "string"
        ? nextTextFromModal
        : window.prompt("댓글을 수정하세요", comment?.text ?? "");

    if (nextText === null) return;

    const trimmed = String(nextText).trim();
    if (!trimmed) return;

    setSelectedPost((prev) => {
      if (!prev) return prev;
      const nextComments = (prev.comments ?? []).map((c) =>
        c === comment ? { ...c, text: trimmed, time: "방금 전" } : c,
      );
      return { ...prev, comments: nextComments };
    });
  }, []);

  // ===== 댓글 삭제 =====
  const handleDeleteComment = useCallback((comment) => {
    const ok = window.confirm("댓글을 삭제할까요?");
    if (!ok) return;

    setSelectedPost((prev) => {
      if (!prev) return prev;
      const nextComments = (prev.comments ?? []).filter((c) => c !== comment);
      return { ...prev, comments: nextComments };
    });
  }, []);

  // ===== 내 게시글 전용: 게시글 수정/삭제/이미지 수정/댓글 전체삭제/선택삭제 =====
  const handleEditPost = useCallback((postId, patch) => {
    setSelectedPost((prev) => {
      if (!prev || prev.id !== postId) return prev;
      return {
        ...prev,
        recipeTitle: patch?.recipeTitle ?? prev.recipeTitle,
        content: patch?.content ?? prev.content,
        ingredients: patch?.ingredients ?? prev.ingredients,
      };
    });
  }, []);

  const handleDeletePost = useCallback(
    (postId) => {
      console.log("delete post:", postId);
      handleCloseModals();
    },
    [handleCloseModals],
  );

  const handleEditPostImage = useCallback((postId, index, fileOrUrl) => {
    const nextUrl =
      typeof fileOrUrl === "string"
        ? fileOrUrl
        : URL.createObjectURL(fileOrUrl);

    setSelectedPost((prev) => {
      if (!prev || prev.id !== postId) return prev;
      const nextImages = [...(prev.images ?? [])];
      nextImages[index] = nextUrl;
      return { ...prev, images: nextImages };
    });
  }, []);

  const handleDeleteAllComments = useCallback((postId) => {
    setSelectedPost((prev) => {
      if (!prev || prev.id !== postId) return prev;
      return { ...prev, comments: [] };
    });
  }, []);

  const handleDeleteSelectedComments = useCallback((postId, selectedKeys) => {
    const selectedSet = new Set(selectedKeys ?? []);

    setSelectedPost((prev) => {
      if (!prev || prev.id !== postId) return prev;

      const nextComments = (prev.comments ?? []).filter((c, idx) => {
        const key = `${c.nickname}-${idx}`;
        return !selectedSet.has(key);
      });

      return { ...prev, comments: nextComments };
    });
  }, []);

  // ===== 트렌딩 카드 클릭 =====
  const handleTrendingCardClick = useCallback(
    (item) => {
      const post = buildMockPost({
        id: item.id,
        recipeName: item.recipeName ?? `레시피 ${item.id}`,
        nickname: item.nickname,
        level: item.level,
        likes: item.likes,
      });
      handleOpenAnyPostModal(post);
    },
    [buildMockPost, handleOpenAnyPostModal],
  );

  return (
    <S.Page>
      <div id="community-top" />

      <S.Container>
        <CommunityHeader
          onSearch={({ keyword, sort }) => {
            console.log("커뮤니티 검색", { keyword, sort });
          }}
        />
      </S.Container>

      <S.FullDivider />

      <S.Container>
        <TrendingCarousel
          onCardClick={handleTrendingCardClick}
          meNickname={meNickname}
        />
        <S.SectionDivider />

        <FeedGrid
          items={allItems}
          onCardClick={handleOpenAnyPostModal}
          meNickname={meNickname}
        />
      </S.Container>

      {/* ✅ 모달은 둘 다 렌더하되 open으로 제어 (조건 렌더보다 안정적) */}
      <CommunityPostModal
        open={isOtherPostModalOpen}
        post={selectedPost}
        onClose={handleCloseModals}
        onClickDetail={(post) => console.log("자세히 보기", post)}
        meNickname={meNickname}
        onSubmitComment={handleSubmitComment}
        onEditComment={handleEditComment}
        onDeleteComment={handleDeleteComment}
      />

      <MyPostModal
        open={isMyPostModalOpen}
        post={selectedPost}
        onClose={handleCloseModals}
        meNickname={meNickname}
        onSubmitComment={handleSubmitComment}
        onEditComment={handleEditComment}
        onDeleteComment={handleDeleteComment}
        onEditPost={handleEditPost}
        onDeletePost={handleDeletePost}
        onEditPostImage={handleEditPostImage}
        onDeleteAllComments={handleDeleteAllComments}
        onDeleteSelectedComments={handleDeleteSelectedComments}
      />

      <FloatingActions targetId="community-top" />
    </S.Page>
  );
};

export default CommunityMain;
