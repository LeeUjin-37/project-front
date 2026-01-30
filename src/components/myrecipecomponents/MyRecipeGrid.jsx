import React from "react";
import * as S from "../../pages/community/style"; // 커뮤니티 그리드 스타일 재사용
import MyRecipeCard from "./MyRecipeCard";

const MyRecipeGrid = ({ items, onCardClick, onToggleBookmark }) => {
  return (
    <S.FeedGridSection>
      <S.FeedGridWrap>
        {items.map((item) => (
          <MyRecipeCard
            key={item.id}
            item={item}
            onClick={() => onCardClick?.(item.id)}
            onToggleBookmark={() => onToggleBookmark?.(item.id)}
          />
        ))}
      </S.FeedGridWrap>
    </S.FeedGridSection>
  );
};

export default MyRecipeGrid;
