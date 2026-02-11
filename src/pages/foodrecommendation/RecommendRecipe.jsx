import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import S from "./recommendrecipe.style";

const RecommendRecipe = () => {
  const { foodId } = useParams();
  const location = useLocation();

  const recipe =
    location.state?.recipe || {
      id: Number(foodId),
      title: "초간단 계란참치죽",
      desc: "몸을 따뜻하게 해주는 영양만점 계란참치죽\n간단한 재료로 빠르게 만들 수 있어요.",
      rating: 4.8,
      xp: 350,
      cookTimeMin: 10,
      level: "쉬움",
      category: "국",
      imageUrl: "/assets/images/kimchi_soup.png",
    };

  return (
    <>
      {/* Hero */}
      <S.Hero>
        <S.HeroImage src={recipe.imageUrl} />
        <S.HeroOverlay>
          <S.HeroInner>
            <S.Title>{recipe.title}</S.Title>
            <S.Description>
              {recipe.desc.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </S.Description>

            <S.MetaRow>
              <S.MetaBadge>★ {recipe.rating}</S.MetaBadge>
              <S.MetaBadge>XP {recipe.xp}</S.MetaBadge>
            </S.MetaRow>
          </S.HeroInner>
        </S.HeroOverlay>
      </S.Hero>

      {/* Content */}
      <S.Container>
        <S.TagRow>
          <S.Tag>{recipe.cookTimeMin}분</S.Tag>
          <S.Tag>{recipe.level}</S.Tag>
          <S.Tag>{recipe.category}</S.Tag>
        </S.TagRow>

        <S.SectionTitle>재료</S.SectionTitle>

        <S.IngredientGrid>
          <S.IngredientCard>
            <S.CardTitle>주재료</S.CardTitle>
            <S.IngredientItem>✔ 밥 1공기</S.IngredientItem>
            <S.IngredientItem>✔ 참치 1캔</S.IngredientItem>
            <S.IngredientItem>✔ 계란 2개</S.IngredientItem>
          </S.IngredientCard>

          <S.IngredientCard>
            <S.CardTitle>부재료</S.CardTitle>
            <S.IngredientItem>✖ 대파 1개</S.IngredientItem>
            <S.IngredientItem>✖ 양파 1개</S.IngredientItem>
          </S.IngredientCard>

          <S.IngredientCard>
            <S.CardTitle>양념</S.CardTitle>
            <S.IngredientItem>✔ 참기름 1/2큰술</S.IngredientItem>
            <S.IngredientItem>✖ 소금 약간</S.IngredientItem>
          </S.IngredientCard>
        </S.IngredientGrid>

        <S.StepTitle>만드는 방법</S.StepTitle>

        <S.StepGrid>
          {[1,2,3,4,5,6,7,8].map((num) => (
            <S.StepCard key={num}>
              <S.StepNumber>{num}</S.StepNumber>
              <S.StepImage src="/assets/images/kimchi_soup.png" />
              <S.StepContent>
                <b>Step {num}. 재료 손질하기</b>
                <p>이제 재료를 꺼내서 요리할 준비를 해주세요.</p>
              </S.StepContent>
            </S.StepCard>
          ))}
        </S.StepGrid>

        <S.ButtonRow>
          <S.PrimaryButton>
            요리 완성 <span>›</span>
          </S.PrimaryButton>
        </S.ButtonRow>
      </S.Container>
    </>
  );
};

export default RecommendRecipe;
