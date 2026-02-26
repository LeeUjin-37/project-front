import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import usePostStore from "../../store/postStore";
import useAuthStore from "../../store/authStore";
import MyPostModal from "../../components/communitycomponents/MyPostModal";

const MyPostsDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { posts } = usePostStore();
  const { user, isAuthenticated } = useAuthStore();

  const post = posts.find(
    (p) => p.id === Number(postId) && p.author?.id === user?.id
  );

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (!post) {
    return <Navigate to="/myposts" replace />;
  }

  return (
    <MyPostModal
      open={true}
      post={post}
      onClose={() => navigate(-1)}
    />
  );
};

export default MyPostsDetail;