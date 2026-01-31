import React from "react";
import * as S from "./style";
import MyRecipeCard from "./MyRecipeCard";

const MyRecipeGrid = ({ items, onCardClick, onToggleBookmark }) => {
  return (
    <S.Grid>
      {items.map((item) => (
        <MyRecipeCard
          key={item.id}
          item={item}
          onClick={() => onCardClick?.(item.id)}
          onToggleBookmark={() => onToggleBookmark?.(item.id)}
        />
      ))}
    </S.Grid>
  );
};

export default MyRecipeGrid;
