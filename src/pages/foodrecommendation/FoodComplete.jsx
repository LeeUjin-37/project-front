import React, { useState } from "react";
import S from "./style";

const FoodComplete = () => {
  const [review, setReview] = useState("");
  const maxLength = 500;

  return (
    <S.Page>
      {/* Hero */}
      <S.Hero>
        <S.HeroImg src="/assets/images/kimchi_soup.png" />
        <S.HeroOverlay>
          <S.HeroTextWrap>
            <S.HeroTitle>초간단 계란참치죽</S.HeroTitle>
            <S.HeroSub>축하합니다! 요리를 완성하셨어요 :)</S.HeroSub>
          </S.HeroTextWrap>
        </S.HeroOverlay>
      </S.Hero>

      <>

        {/* 사진 업로드 */}
        <S.Section>
          <S.SectionTitle>완성 사진 업로드</S.SectionTitle>

          <S.UploadBox>
            <S.UploadIcon>🖼</S.UploadIcon>
            <S.UploadText>
              클릭하여 사진을 업로드 하세요.
              <br />
              <span>.JPG, PNG 파일 지원</span>
            </S.UploadText>
          </S.UploadBox>
        </S.Section>

        {/* 후기 */}
        <S.Section>
          <S.SectionTitle>요리후기</S.SectionTitle>
          <S.Textarea
            placeholder="요리를 만들면서 느낀 점이나 팁을 공유해주세요."
            maxLength={maxLength}
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <S.TextCount>
            {review.length} / {maxLength}
          </S.TextCount>
        </S.Section>

        {/* 재료 체크 */}
        <S.Section>
          <S.SectionTitle>사용한 재료 체크</S.SectionTitle>

          <S.IngredientBox>
            {Array.from({ length: 12 }).map((_, i) => (
              <S.IngredientItem key={i} $active={i < 6}>
                ✔ 밥 1공기
              </S.IngredientItem>
            ))}
            <S.SelectedText>9개 재료 선택됨</S.SelectedText>
          </S.IngredientBox>
        </S.Section>

        {/* XP */}
        <S.Section>
          <S.SectionTitle>획득한 XP</S.SectionTitle>

          <S.XPBox>
            <S.XPLabel>총 획득 XP</S.XPLabel>
            <S.ProgressBar>
              <S.ProgressFill width="20%" />
            </S.ProgressBar>

            <S.LevelLabel>현재 Lv.12</S.LevelLabel>
            <S.ProgressBar>
              <S.ProgressFill width="80%" color="#1f6ae1" />
            </S.ProgressBar>
          </S.XPBox>
        </S.Section>

        {/* 커뮤니티 공유 */}
        <S.Section>
          <S.SectionTitle>커뮤니티 공유</S.SectionTitle>
          <S.ShareBox>
            완성 버튼을 누르면 사진과 후기가 커뮤니티 자동으로 업로드 됩니다.
            다른 사용자들과 함께 요리 경험을 공유해보세요!
          </S.ShareBox>
        </S.Section>

        {/* 버튼 */}
        <S.Bottom>
          <S.PrimaryButton>완성 인증하기</S.PrimaryButton>
        </S.Bottom>

      </>
    </S.Page>
  );
};

export default FoodComplete;
