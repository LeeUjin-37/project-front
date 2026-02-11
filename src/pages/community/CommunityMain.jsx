import React, { useState } from "react";
import { Container, FullDivider, Page, SectionDivider } from "./style";
import { CommunityHeader } from "../../components/communitycomponents/CommunityHeader";
import TrendingCarousel from "../../components/communitycomponents/TrendingCarousel";
import FeedGrid from "../../components/communitycomponents/FeedGrid";
import FloatingActions from "../../components/layoutcomponents/FloatingActions";
import CommunityPostModal from "../../components/communitycomponents/CommunityPostModal";

const CommunityMain = () => {
  //  모달 상태
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  // 카드 클릭 → 모달 오픈
  const handleOpenPostModal = (post) => {
    setSelectedPost(post);
    setIsPostModalOpen(true);
  };

  // 모달 닫기
  const handleClosePostModal = () => {
    setIsPostModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <Page>
      <div id="community-top" />

      {/*  게시물 상세 모달 (라우터 x, UI 레이어 o) */}
      <CommunityPostModal
        open={isPostModalOpen}
        post={selectedPost}
        onClose={handleClosePostModal}
      />

      <Container>
        <CommunityHeader
          onSearch={({ keyword, sort }) => {
            console.log("커뮤니티 검색", { keyword, sort });
          }}
        />
      </Container>

      <FullDivider />

      <Container>
        <TrendingCarousel />
        <SectionDivider />

        {/*  카드 클릭 시 모달 열리도록 핸들러 전달 */}
        <FeedGrid onCardClick={handleOpenPostModal} />
      </Container>

      <FloatingActions targetId="community-top" />
    </Page>
  );
};

export default CommunityMain;
