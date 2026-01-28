import React from "react";
import * as S from "../../pages/loginandjoin/style";
import { openKakaoLogin } from "./function";

const KakaoLoginComponent = () => {
  return (
    <div>
      <S.QuickIconImg
        src="\assets\icons\kakao_button.png"
        onClick={openKakaoLogin}
        alt="카카오 로그인"
      />
    </div>
  );
};

export default KakaoLoginComponent;
