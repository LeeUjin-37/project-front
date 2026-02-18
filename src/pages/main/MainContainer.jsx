import React from "react";
import * as S from "../../pages/main/style.js";

import MainHero from "../../components/maincomponents/MainHero";
import MainHowItWorks from "../../components/maincomponents/MainHowItWorks";
import MainRecipeSection from "../../components/maincomponents/MainRecipeSection";
import MainLiveReviewSection from "../../components/maincomponents/MainLiveReviewSection";
import { LIVE_REVIEW_DATA } from "../../components/maincomponents/liveReviewData";

import {
  RECIPE_DATA_YEAR_END,
  RECIPE_DATA_DIET,
  RECIPE_DATA_SIDE,
} from "../../components/maincomponents/recipeData";
import FloatingActions from "../../components/layoutcomponents/FloatingActions";

const MainContainer = () => {
  return (
    <>
      <MainHero />
      <MainHowItWorks />
      <S.RecipeSectionGroup>
        <MainRecipeSection title="따뜻한 연말 특별한 요리 레시피" data={RECIPE_DATA_YEAR_END} />
        <MainRecipeSection title="다이어트 하기 딱 좋은 레시피" data={RECIPE_DATA_DIET} />
        <MainRecipeSection title="집에 반찬이 부족해요! 반찬 레시피" data={RECIPE_DATA_SIDE} />
      </S.RecipeSectionGroup>
      <MainLiveReviewSection
        reviews={LIVE_REVIEW_DATA}
        onMoreClick={() => console.log("더 보기 클릭")}
      />
      <FloatingActions targetId="community-top" />
    </>
  );
};

export default MainContainer;
