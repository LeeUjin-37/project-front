import React, { useRef } from "react";
import * as S from "./style";

import ReportChallengeHero from "../../components/reportchallengecomponents/ReportChallengeHero";
import ChallengeList from "../../components/reportchallengecomponents/ChallengeList";
import MaterialUsageTrend from "../../components/reportchallengecomponents/MaterialUsageTrend";
import WeeklyChallengeCard from "../../components/reportchallengecomponents/WeeklyChallengeCard";
import CookingProofSwiper from "../../components/reportchallengecomponents/CookingProofSwiper";
import ChallengeCompleteModal from "../../components/reportchallengecomponents/ChallengeCompleteModal";
import FloatingActions from "../../components/layoutcomponents/FloatingActions";

const ReportAndChallenge = () => {
  const weeklyRef = useRef(null);

  const scrollToWeekly = () => {
    weeklyRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <ReportChallengeHero
        onClickJoin={scrollToWeekly}
        images={{
          bg: "/assets/images/reportandchallenge/v_bg.png",
          deco: "/assets/images/reportandchallenge/v_obj01.png",
          cardFrame: "/assets/images/reportandchallenge/v_frame.png",
        }}
      />

      <ChallengeList />
      <MaterialUsageTrend />
      <div ref={weeklyRef}>
        <WeeklyChallengeCard />
      </div>
      <CookingProofSwiper />
      <ChallengeCompleteModal />
      <FloatingActions targetId="community-top" />
    </div>
  );
};

export default ReportAndChallenge;
