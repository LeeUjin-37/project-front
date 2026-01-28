import React from "react";
import * as S from "./style"
import { openKakaoLogin } from "../../components/logincomponents/quickloginfunction";
import JoinComponent from "../../components/logincomponents/JoinComponent";
import { Link } from "react-router-dom";

const JoinPage = () => {
  return (
    <S.JoinScreen>
      <S.JoinContainer>
        <S.JoinH1>회원가입</S.JoinH1>
        <S.JoinByKakaoContainer onClick={openKakaoLogin}>
          <img src="\assets\icons\kakao_button.png" alt="카카오 간편가입" />
          <S.JoinByKakaoSpan>카카오로 3초 만에 시작하기</S.JoinByKakaoSpan>
        </S.JoinByKakaoContainer>
        <S.JoinBannerContainer>
          <S.JoinBanner
            src="\assets\images\signup_img.png"
            alt="페이지 광고 배너"
          />
          {/* <S.BannerText>
            지금 가입하고
            <br />
            냉장고에 있는 재료로
            <br />
            요리를 시작해 봐요!
          </S.BannerText> */}
        </S.JoinBannerContainer>

        <JoinComponent/>

        <S.ToLoginDiv>
          <span>이미 회원이신가요?</span> <S.JoinToLogin to={"/login"}>로그인</S.JoinToLogin>
        </S.ToLoginDiv>
      </S.JoinContainer>
    </S.JoinScreen>
  );
};

export default JoinPage;
