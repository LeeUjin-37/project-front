import React from "react";
import * as S from "../../pages/main/style";

const MainHowItWorks = () => {
  return (
    <S.HowWrapper>
      {/* 왼쪽 설명 영역 */}
      <S.LeftArea>
        <S.SectionTitle>프리고고 하는 방법</S.SectionTitle>
        <S.SectionDesc>
          냉장고 속 재료를 효율적으로 관리하고,<br />
          맞춤 요리 추천을 받으며 레벨업하는 즐거움을 경험해보세요.
        </S.SectionDesc>
      </S.LeftArea>

      {/* 오른쪽 카드 영역 */}
      <S.RightArea>
        <S.CardGrid>
          <S.StepCard>
            <S.StepIcon>
              <S.WorksIconImg
                src={`${process.env.PUBLIC_URL}/assets/images/main/ico_work01.png`}
                alt="재료 담기"
              />
            </S.StepIcon>
            <S.StepTextArea>
              <S.StepTitle>1. 재료 담기</S.StepTitle>
              <S.StepDesc>
                <S.StepPoint>집에 있는 재료</S.StepPoint>를 담아보세요.<br />
                프리고고가 <S.StepPoint>자동으로 정리</S.StepPoint>해드려요.
              </S.StepDesc>
            </S.StepTextArea>
          </S.StepCard>

          <S.StepCard>
            <S.StepIcon>
              <S.WorksIconImg
                src={`${process.env.PUBLIC_URL}/assets/images/main/ico_work02.png`}
                alt="요리 추천"
              />
            </S.StepIcon>
            <S.StepTextArea>
              <S.StepTitle>2. 요리 추천</S.StepTitle>
              <S.StepDesc>
                <S.StepPoint>입력한 재료로 만들 수 있는 요리</S.StepPoint>를<br />
                가장 먼저 추천해드려요.
              </S.StepDesc>
            </S.StepTextArea>
          </S.StepCard>

          <S.StepCard>
            <S.StepIcon>
              <S.WorksIconImg
                src={`${process.env.PUBLIC_URL}/assets/images/main/ico_work03.png`}
                alt="요리 인증"
              />
            </S.StepIcon>
            <S.StepTextArea>
              <S.StepTitle>3. 요리 인증</S.StepTitle>
              <S.StepDesc>
                요리를 만들고 사진으로 인증하면<br />
                <S.StepPoint>XP가 쌓여 성장</S.StepPoint>할 수 있어요.
              </S.StepDesc>
            </S.StepTextArea>
          </S.StepCard>

          <S.StepCard>
            <S.StepIcon>
              <S.WorksIconImg
                src={`${process.env.PUBLIC_URL}/assets/images/main/ico_work04.png`}
                alt="레벨 및 뱃지 획득"
              />
            </S.StepIcon>
            <S.StepTextArea>
              <S.StepTitle>4. 레벨 및 뱃지 획득</S.StepTitle>
              <S.StepDesc>
                재료를 소비하면 냉장고가 업데이트되고<br />
                당신의 <S.StepPoint>요리 레벨이 상승</S.StepPoint>합니다!
              </S.StepDesc>
            </S.StepTextArea>
          </S.StepCard>
        </S.CardGrid>
      </S.RightArea>
    </S.HowWrapper>
  );
};

export default MainHowItWorks;
