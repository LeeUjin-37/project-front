import React, { useState } from 'react';
import * as S from "../../pages/community/style";

// 카드 1장(공용)

// 캐러셀 카드랑 100% 동일 UI
// props 기반
// 여기서만 상태 관리

/**
 * PostCard
 * - 트렌딩 캐러셀 카드 UI를 공용 컴포넌트로 분리한 버전
 * - 캐러셀에서는 w(폭) props로 width를 맞춤
 * - 피드 그리드에서는 w 없이 사용 (CSS grid가 폭을 잡아줌)
 */

const PostCard = ({ item, w, width, onClick }) => {
  const cardWidth = w ?? width; // 둘 중 들어온 거 사용, 실수 방지
  // 지금은 더미(하드코딩)로 유지
  // 나중에 API 붙이면 item에서 값을 받아오면 됨
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(item?.likes ?? 24);

  const handleLikeToggle = (e) => {
    e.stopPropagation() // 카드 클릭 막기 (하트가 카드 버튼 안에 있으면, 하트 눌러도 카드 클릭이 같이 터지니까 stopPropagation은 필수.)

    setLiked((prev) => {
      if(prev) {
        setLikeCount((c) => c -1)
      }else {
        setLikeCount((c) => c + 1)
      }
      return !prev;
    })
  }


  const recipeImage = item?.recipeImage ?? "/assets/images/oatmeal.png"
  const profileImage = item?.profileImage ?? "/assets/images/pinggu.png"
  const recipeName = item?.recipeName ?? "김치찌개";
  const nickname = item?.nickname ?? "굴곡밥러버";
  const level = item?.level ?? 4;
  const xp = item?.xp ?? 150;
  const likes = item?.likes ?? 24;
  const createdAt = item?.createdAt ?? "3일 전";
  const desc = item?.desc ?? "매생이 향이 진해서 국을 뜨자마자 바다 향이 확 올라와요. 굴도 비린 맛 하나 없이 신선해서 씹을 때마다 탱글한 식감이 느껴졌어요.";


  return (
    <S.CarouselCard
      type="button"
      $w={cardWidth} // 캐러셀에서만 의미 있음. 그리드에서는 undefined로 두면 기본값(280px) 대신 grid가 폭을 잡아줌
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
            <S.UserNickName>{nickname}</S.UserNickName>
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