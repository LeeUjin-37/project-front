import React from "react";
import {
  HeroWrapper,
  HeroContent,
  HeroTitle,
  HeroDesc,
  HeroButton,
  ArrowButton,
  Indicator
} from "./style";

const MainHero = () => {
  return (
    <HeroWrapper>
      <ArrowButton className="left">‹</ArrowButton>

      <HeroContent>
        <HeroTitle>
          냉장고를 비우는<br />가장 재밌는 방법
        </HeroTitle>
        <HeroDesc>
          냉장고 속 재료만 넣으면<br />
          그 재료로 바로 만들 수 있는 요리를 추천해주고<br />
          요리를 완성하면 레벨업되는 요리 게임 플랫폼입니다.
        </HeroDesc>

        <HeroButton>내 냉장고 채워볼까요?</HeroButton>

        <Indicator>1 / 6</Indicator>
      </HeroContent>

      <ArrowButton className="right">›</ArrowButton>
    </HeroWrapper>
  );
};

export default MainHero;