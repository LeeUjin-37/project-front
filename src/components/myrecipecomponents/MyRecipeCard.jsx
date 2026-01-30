import React from "react";
import * as S from "./style";

const MyRecipeCard = ({ item, onClick, onToggleBookmark }) => {
  const {
    title,
    desc,
    rating,
    xp,
    cookTimeMin,
    difficulty,
    missingIngredients,
    imageUrl,
    saved,
  } = item;

  // 저장한 레시피: 기본 saved=true (노란 북마크)
  const bookmarkIcon = saved
    ? "/assets/icons/yellow_bookmark.png"
    : "/assets/icons/bookmark.png";

  const handleBookmarkClick = (e) => {
    e.stopPropagation(); // 카드 클릭(상세 이동) 막기
    onToggleBookmark?.();
  };

  return (
    <S.Card type="button" onClick={onClick}>
      <S.ImageWrap>
        <S.Thumb src={imageUrl} alt={title} />

        {/* 북마크 버튼 */}
        <S.BookmarkButton type="button" onClick={handleBookmarkClick} aria-label="저장 해제">
          <S.BookmarkIcon src={bookmarkIcon} alt="" />
        </S.BookmarkButton>
      </S.ImageWrap>

      <S.Body>
        <S.Title>{title}</S.Title>
        <S.Desc>{desc}</S.Desc>

        <S.MetaRow>
          {/* ⭐ rating / XP */}
          <S.InfoRow>
            <S.Badge>
              <S.BadgeText>★ {rating}</S.BadgeText>
            </S.Badge>

            <S.Badge>
              <S.BadgeText>XP {xp}</S.BadgeText>
            </S.Badge>
          </S.InfoRow>

          {/* 조리시간 / 난이도 / 부족한재료 */}
          <S.InfoRow>
            <S.InfoChip>{`조리시간 ${cookTimeMin}분`}</S.InfoChip>
            <S.InfoChip>{`난이도 ${difficulty}`}</S.InfoChip>
            <S.InfoChip>{missingIngredients}</S.InfoChip>
          </S.InfoRow>
        </S.MetaRow>
      </S.Body>
    </S.Card>
  );
};

export default MyRecipeCard;
