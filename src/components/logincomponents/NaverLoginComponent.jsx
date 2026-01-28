import React from "react";
import * as S from "../../pages/loginandjoin/style";
import { openNaverLogin } from "./function";

const NaverLoginComponent = () => {


  return (
    <div>
      <S.QuickIconImg
        src="\assets\icons\naver_button.png"
        onClick={openNaverLogin}
        alt="네이버 로그인"
      />
    </div>
  );
};

export default NaverLoginComponent;
