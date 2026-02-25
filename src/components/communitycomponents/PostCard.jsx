import React, { useState, useMemo } from "react";
import * as S from "../../pages/community/style";

/**
 * PostCard
 * - 트렌딩 캐러셀 카드 / 피드 공용
 * - "내 글"은 닉네임 도트 + 카드 약한 강조로 표시
 */

const PostCard = ({ item, w, width, onClick, meNickname }) => {
  const cardWidth = w ?? width;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(item?.likes ?? 24);

  const handleLikeToggle = (e) => {
    e.stopPropagation();
    setLiked((prev) => {
      setLikeCount((c) => (prev ? c - 1 : c + 1));
      return !prev;
    });
  };

  // const recipeImage = item?.recipeImage ?? "/assets/images/oatmeal.png";  
  // recipeImage 수정
  const recipeImage =
    item?.images?.[0] ?? item?.recipeImage ?? "/assets/images/oatmeal.png";
  const profileImage = item?.profileImage ?? "/assets/images/pinggu.png";
  const recipeName = item?.recipeName ?? "김치찌개";
  const nickname = item?.nickname ?? "굴곡밥러버";
  const level = item?.level ?? 4;
  const xp = item?.xp ?? 150;
  const createdAt = item?.createdAt ?? "3일 전";
  const desc =
    item?.desc ??
    "매생이 향이 진해서 국을 뜨자마자 바다 향이 확 올라와요. 굴도 비린 맛 하나 없이 신선해서 씹을 때마다 탱글한 식감이 느껴졌어요.";

  // ✅ 내 글 판별
  const isMine = useMemo(() => {
    const me = String(meNickname ?? "").trim();
    const author = String(nickname ?? "").trim();
    return !!me && !!author && me === author;
  }, [meNickname, nickname]);

  return (
    <S.CarouselCard
      type="button"
      $w={cardWidth}
      $mine={isMine}
      onClick={onClick}
    >
      <S.CardImageArea src={recipeImage} alt={`${recipeName} 이미지`} />

      <S.CardContentArea>
        <S.CardTitleRow>
          <S.CardTitleLeft>
            <S.ProfileImg src={profileImage} alt="유저 프로필" />
            <S.CardTitle>{recipeName}</S.CardTitle>
          </S.CardTitleLeft>

          <S.CardLikeArea onClick={handleLikeToggle}>
            <S.HeartIcon $liked={liked} />
            <S.LikeCount>{likeCount}</S.LikeCount>
          </S.CardLikeArea>
        </S.CardTitleRow>

        <S.CardDivider />

        <S.CardMetaRow>
          <S.MetaLeft>
            {/* ✅ 닉네임 도트 표시 */}
            <S.UserNickName $mine={isMine}>{nickname}</S.UserNickName>
          </S.MetaLeft>

          <S.MetaCenter>
            <S.BadgeChip>
              <S.BadgeChipIcon src="/assets/icons/star.svg" alt="별 아이콘" />
              Lv.{level}
            </S.BadgeChip>

            <S.BadgeChip2>XP {xp}</S.BadgeChip2>
          </S.MetaCenter>

          <S.MetaRight>
            <S.CardDateText>{createdAt}</S.CardDateText>
          </S.MetaRight>
        </S.CardMetaRow>

        <S.CardDesc>{desc}</S.CardDesc>
      </S.CardContentArea>
    </S.CarouselCard>
  );
};

export default PostCard;
