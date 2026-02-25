import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import usePostStore from "../../store/postStore";
import MyPostModal from "../../components/communitycomponents/MyPostModal";

const MyPostsDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { posts } = usePostStore();

  const post = useMemo(() => {
    return posts.find((p) => p.id === Number(postId));
  }, [posts, postId]);

  if (!post) return null;

  return (
    <MyPostModal
      open={true}
      post={post}
      onClose={() => navigate(-1)}
    />
  );
};

export default MyPostsDetail;