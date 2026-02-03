import React from "react";
import * as S from "./style";
import ToChallengeComponent from "../../components/levelbadgecomponents/ToChallengeComponent";
import MyLevelComponent1 from "../../components/levelbadgecomponents/MyLevelComponent1";

const LevelAndBadge = () => {
  // <Link to={"/reportandchallenge"}>리포트&챌린지 이동</Link>
  return (
    <S.LevelAndBadgeScreen>
      <S.BannerWraper>
        <S.BaseImage
          src="\assets\images\levelandbadge\levelpage_main_img.png"
          alt="레벨&뱃지 배너"
        />
        <S.OverlayImg
          src="\assets\images\levelandbadge\crown.png"
          alt="배너 왕관"
          top={100}
          left={200}
          zIndex={2}
        />
        <S.OverlayImg
          src="\assets\images\levelandbadge\trophy.png"
          alt="배너 트로피"
          top={60}
          left={1420}
          zIndex={2}
        />
        <S.OverlayImg
          src="\assets\images\levelandbadge\left_confetti.png"
          alt="배너 좌측"
          top={0}
          left={120}
          zIndex={1}
        />
        <S.OverlayImg
          src="\assets\images\levelandbadge\right_confetti.png"
          alt="배너 우측"
          top={0}
          left={1200}
          zIndex={1}
        />
        <ToChallengeComponent />
      </S.BannerWraper>

      <MyLevelComponent1 />

      <div>
        {" "}
        <div>나의 뱃지</div>
        <div>특별한 업적을 달성하고 뱃지를 모아보세요</div>
        <div>뱃지 모달</div>
      </div>
    </S.LevelAndBadgeScreen>
  );
};

export default LevelAndBadge;
