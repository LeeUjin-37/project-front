import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../../pages/levelandbadge/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ToChallengeComponent = () => {
  return (
    <S.TochallengeWrapper>
      <S.BannerH1>레벨 & 뱃지</S.BannerH1>
      <S.BannerP>특별한 업적을 달성하고 뱃지를 모아보세요.</S.BannerP>
      <S.ToChallengeLink to={"/reportandchallenge"}>지금 바로 도전하기
      <FontAwesomeIcon icon={faChevronRight} color='#3385FF'/>
      </S.ToChallengeLink>
    </S.TochallengeWrapper>
  );
};

export default ToChallengeComponent;