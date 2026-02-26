import React, { useMemo } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import usePostStore from "../../store/postStore";
import useAuthStore from "../../store/authStore";
import FeedGrid from "../../components/communitycomponents/FeedGrid";
import S from "./style";

const MyPosts = () => {
  const { posts } = usePostStore();
  const { user, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  // useMemo는 항상 먼저 실행
  const myItems = useMemo(() => {
    if (!user) return [];

    return posts
      .filter((p) => p.author?.id === user.id)
      .map((post) => ({
        id: post.id,
        recipeName: post.recipeTitle,
        nickname: post.author?.nickname,
        level: post.author?.level ?? 1,
        likes: post.likes ?? 0,
        images: post.images ?? [],
        content: post.content,
        ingredients: post.ingredients ?? [],
        createdAt: post.createdAt,
        comments: post.comments ?? [],
      }));
  }, [posts, user]);

  // Hook 아래에서 로그인 체크
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  const handleCardClick = (item) => {
    navigate(`/myposts/post/${item.id}`);
  };

return (
  <S.Page>
      <S.Container>

        {/* ===== 헤더 ===== */}
        <S.HeaderSection>
          <S.Title>나의 커뮤니티 게시물</S.Title>
        </S.HeaderSection>

        <S.FullDivider />

        {/* ===== 피드 영역 ===== */}
        <S.FeedGridSection>
          {myItems.length === 0 ? (
            <S.EmptyText>
              작성한 게시글이 없습니다.
            </S.EmptyText>
          ) : (
            <FeedGrid
              items={myItems}
              meNickname={user.nickname}
              onCardClick={handleCardClick}
            />
          )}
        </S.FeedGridSection>

        <Outlet />
      </S.Container>
    </S.Page>
);
};

export default MyPosts;