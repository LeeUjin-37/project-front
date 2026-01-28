import React from "react";
import * as S from "../../pages/loginandjoin/style";
import { openAppleLogin } from "./function";

const AppleLoginComponent = () => {
  return (
    <div>
      <S.QuickIconImg
        src="\assets\icons\apple_button.png"
        onClick={openAppleLogin}
        alt="애플 로그인"
      />
    </div>
  );
};

export default AppleLoginComponent;
