import React from "react";
import * as S from "../../pages/loginandjoin/style";
import { openAppleLogin, openEmailLogin, openNaverLogin } from "./quickloginfunction";

const JoinComponent = () => {
  return (
    <div>
      <S.JoinIconContainer>
        <S.StyledJoinFieldset>
          <S.JoinLegend align="center">&nbsp;또는&nbsp;</S.JoinLegend>
          <S.JoinIconBox>
            <S.JoinIconWrap>
              <S.JoinIconImg
                src="\assets\icons\email_button.png"
                alt="이메일 버튼"
                onClick={openEmailLogin}
              />
              <S.JoinSpan>이메일</S.JoinSpan>
            </S.JoinIconWrap>
            <S.JoinIconWrap>
              <S.JoinIconImg
                src="\assets\icons\naver_button.png"
                alt="네이버 버튼"
                onClick={openNaverLogin}
              />
              <S.JoinSpan>네이버</S.JoinSpan>
            </S.JoinIconWrap>
            <S.JoinIconWrap>
              <S.JoinIconImg
                src="\assets\icons\apple_button.png"
                alt="애플 버튼"
                onClick={openAppleLogin}
              />
              <S.JoinSpan>애플</S.JoinSpan>
            </S.JoinIconWrap>
          </S.JoinIconBox>
        </S.StyledJoinFieldset>
      </S.JoinIconContainer>
    </div>
  );
};

export default JoinComponent;
