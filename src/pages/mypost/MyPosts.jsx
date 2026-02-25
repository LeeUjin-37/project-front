import React, { useMemo } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import usePostStore from "../../store/postStore";
import useAuthStore from "../../store/authStore";
import FeedGrid from "../../components/communitycomponents/FeedGrid";

const MyPosts = () => {
  const { posts } = usePostStore();
  const { member } = useAuthStore(); // 🔥 authStore에 member로 저장되어 있음
  const navigate = useNavigate();

  const meNickname = member?.nickname ?? null;

  // ===== 내가 쓴 글만 필터링 =====
  const myItems = useMemo(() => {
    if (!member) return [];

    return posts
      .filter((p) => {
        // id 비교 우선
        if (p.author?.id && member.id) {
          return p.author.id === member.id;
        }

        // id 없으면 nickname fallback
        return (
          p.author?.nickname &&
          member.nickname &&
          p.author.nickname === member.nickname
        );
      })
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
  }, [posts, member]);

  const handleCardClick = (item) => {
    navigate(`/myposts/post/${item.id}`);
  };

  // ===== 로그인 안 되어 있으면 안내 =====
  if (!member) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>나의 커뮤니티 게시물</h1>
        <p>로그인이 필요합니다.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>나의 커뮤니티 게시물</h1>

      {myItems.length === 0 ? (
        <p>작성한 게시글이 없습니다.</p>
      ) : (
        <FeedGrid
          items={myItems}
          meNickname={meNickname}
          onCardClick={handleCardClick}
        />
      )}

      {/* 🔥 중첩 모달 자리 */}
      <Outlet />
    </div>
  );
};

export default MyPosts;