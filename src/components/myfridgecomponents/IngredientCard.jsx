import React from "react";
import S from "../../pages/myfridge/style";

const IngredientCard = ({
  name,
  icon = "🥬",
  active,
  deleteMode,
  onClick,
  quantity,
  expiredAt,
}) => {
  return (
    <S.CardStyle
      active={active}
      deleteMode={deleteMode}
      onClick={onClick}
    >
      {/* 삭제 모드일 때 체크 표시 */}
      {deleteMode && (
        <S.DeleteBadge active={active}>
          {active ? "✓" : ""}
        </S.DeleteBadge>
      )}

      {/* 아이콘 */}
      <S.IconStyle>{icon}</S.IconStyle>

      {/* 재료명 */}
      <S.CardTextStyle>{name}</S.CardTextStyle>

      {/* Hover 정보 (항상 렌더링) */}
      <S.HoverInfo>
        <p>재료명: {name}</p>
        <p>수량: {quantity ?? 0}</p>
        <p>유통기한: {expiredAt || "-"}</p>
      </S.HoverInfo>
    </S.CardStyle>
  );
};

export default IngredientCard;