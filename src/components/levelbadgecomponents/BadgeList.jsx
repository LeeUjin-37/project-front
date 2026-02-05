import React, { useState } from "react";
import * as S from "../../pages/levelandbadge/style";

const BadgeItem = ({ badge }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <S.BadgeDiv
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <S.BadgeImg src={badge.badgeiconUrl} alt={badge.badgename} />
      <S.BadgeLockImg src={badge.badgeLock} alt={"뱃지 락"} />
      <S.BadgeName>{badge.badgename}</S.BadgeName>
      <S.BadgeExp>+{badge.bedgeExp}XP</S.BadgeExp>

      {isHovered && (
        <S.TooltipBox>
          <S.TooltipIconBox>
            <S.BadgeImg src={badge.badgeiconUrl} alt={badge.badgename} />
          </S.TooltipIconBox>
          <S.TooltipName>{badge.badgename}</S.TooltipName>
          <S.TooltipDecription>{badge.description}</S.TooltipDecription>
          <S.GetBadgeAt>
            <img src="\assets\images\badge_hover_bookmark.png" alt="" />
            {badge.getBadgeAt} 해금 됨
          </S.GetBadgeAt>
        </S.TooltipBox>
      )}
    </S.BadgeDiv>
  );
};

const BadgeList = () => {
  // 데이터 생성 로직 (렌더링 시마다 새로 생성되지 않게 구성하는 것이 좋으나 일단 유지)
  const badges = [];
  for (let i = 0; i < 30; i++) {
    let j = i + 1;
    badges.push({
      id: j,
      badgeiconUrl: `\\assets\\images\\circle_lock.png`,
      badgeLock: `\\assets\\images\\badge_lock.png`,
      badgename: `요리사 뱃지${j}`,
      bedgeExp: 30,
      description: `이 뱃지는 현재 잠겨있습니다.\n어떻게 얻을 수 있을까요?`,
      getBadgeAt: "2026.02.04",
    });
  }

  return (
    <S.BadgeContainer>
      {badges.map((badge) => (
        <BadgeItem key={badge.id} badge={badge} />
      ))}
    </S.BadgeContainer>
  );
};

export default BadgeList;   