import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style'
import ToChallengeComponent from '../../components/levelbadgecomponents/ToChallengeComponent';

const LevelAndBadge = () => {
  // <Link to={"/reportandchallenge"}>리포트&챌린지 이동</Link>
  return (
    <S.LevelAndBadgeScreen> //레벨&뱃지 스크린

      <S.BannerWraper>
        <S.BaseImage
          src="\assets\images\levelpage_main_img.png"
          alt="레벨&뱃지 배너"
        />
        <S.OverlayImg 
          src="\assets\images\crown.png" 
          alt="배너 왕관" 
          top={100} left={200} zIndex={2}
        />
        <S.OverlayImg 
          src="\assets\images\trophy.png" 
          alt="배너 트로피"
          top={60} left={1420} zIndex={2}
        />
        <S.OverlayImg 
          src="\assets\images\left_confetti.png" 
          alt="배너 좌측" 
          top={0} left={120} zIndex={1}
        />
        <S.OverlayImg
          src="\assets\images\right_confetti.png" 
          alt="배너 우측" 
          top={0} left={1200} zIndex={1}
        />
        <ToChallengeComponent/>
      </S.BannerWraper>

      <fieldset> //나의 레벨
        <legend>나의 레벨</legend>
        <div>레벨 프로그레스 바</div>
      </fieldset>

      <div> //나의 뱃지
        <div>나의 뱃지</div>
        <div>특별한 업적을 달성하고 뱃지를 모아보세요</div>
        <div>뱃지 모달</div>
      </div>
      
    </S.LevelAndBadgeScreen>
  );
};

export default LevelAndBadge;