import React from "react";
import JoinComponent from "../../components/logincomponents/JoinComponent";
import S from "./style";

const JoinPage = () => {
  return (
    <S.Screen>
      <S.Title className="Title">회원가입</S.Title>
      <S.Wrapper className="Wrapper">
        {/* <img src="\assets\images\signup_img.png" alt="페이지 광고 배너" /> */}
        <JoinComponent />


      </S.Wrapper>
    </S.Screen>
  );
};

export default JoinPage;
