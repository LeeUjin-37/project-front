import React from "react";
import ReportChallengeHero from "../../components/reportchallengecomponents/ReportChallengeHero";
import ChallengeList from "../../components/reportchallengecomponents/ChallengeList";
import ChallengeCompleteModal from "../../components/reportchallengecomponents/ChallengeCompleteModal";

const ReportAndChallenge = () => {
  return (
    <div>
      <ReportChallengeHero
        onClickJoin={() => {
          console.log("이번 주 챌린지 참여하기 클릭");
        }}
        images={{
          bg: "/assets/images/reportandchallenge/v_bg.png",
          deco: "/assets/images/reportandchallenge/v_obj01.png",
          cardFrame: "/assets/images/reportandchallenge/v_frame.png",
        }}
      />

      <ChallengeList />
      <ChallengeCompleteModal />
    </div>
  );
};

export default ReportAndChallenge;
