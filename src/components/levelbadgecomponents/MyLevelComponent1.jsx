import React from "react";
import * as S from '../../pages/levelandbadge/style'
import LevelComponent from "./LevelComponent";

const MyLevelComponent1 = () => {
  return (
    <S.MyLevelWrap>
      <S.MyLevelField>
        {" "}
        <S.MyLevelLegend>나의 레벨</S.MyLevelLegend>
        <LevelComponent/>
      </S.MyLevelField>
    </S.MyLevelWrap>
  );
};

export default MyLevelComponent1;
