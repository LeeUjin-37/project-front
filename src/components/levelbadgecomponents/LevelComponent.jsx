import React from "react";
import { LEVEL_SETTINGS, DEFAULT_USER_DATA } from "./levelFunction";
import * as S from "../../pages/levelandbadge/style";

const LevelComponent = ({ userLevel, userCurrentExp }) => {
  // 1. 값이 없으면 기본값(0, 1)을 사용하도록 강제 형변환
  const level = Number(userLevel) || DEFAULT_USER_DATA.level;
  const currentExp = Number(userCurrentExp) || DEFAULT_USER_DATA.currentExp;

  // 2. 현재 레벨에 맞는 설정 가져오기 (레벨이 범위를 벗어나면 1레벨 데이터 사용)
  const levelInfo = LEVEL_SETTINGS[level] || LEVEL_SETTINGS[1];
  const maxExp = levelInfo.maxExp;

  // 3. 퍼센트 계산 (안전하게 0~100 사이로 제한)
  const progressPercent = Math.min(
    Math.max((currentExp / maxExp) * 100, 0),
    100,
  );

  return (
    <S.MyLevelProgressWrap>
      <S.MyLevelProfileWrap>
        <S.MyLevelProfileContainer src="\assets\images\bronze_frame.png" alt="레벨 프로필 테두리" />
        <S.MyLevelProfileImg src="\assets\images\pinggu.png" alt="예시 프로필 이미지"/>
      </S.MyLevelProfileWrap>


      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <strong>
          LV. {level} {levelInfo.label}
        </strong>
      </div>

      <S.MyLevelProgressContainer>
        <S.MyLevelProgress width={progressPercent} />
      </S.MyLevelProgressContainer>

      <S.ExpText>
        {currentExp.toLocaleString()} / {maxExp.toLocaleString()} EXP 
        ({progressPercent.toFixed(0)}%)
      </S.ExpText>
    </S.MyLevelProgressWrap>
  );
};

export default LevelComponent;
