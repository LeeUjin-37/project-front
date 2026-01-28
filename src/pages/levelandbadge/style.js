import styled from "styled-components";
import { flexCenter, flexCenterColumn, FONT_STYLE } from "../../styles/common";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";

export const LevelAndBadgeScreen = styled.div`
  width: 1920px;
  ${flexCenterColumn};
`;

export const BannerWraper = styled.div`
  width:1920px;
  position: relative;
  height:578px;
`;

export const BaseImage = styled.img`
  position: relative;
  width: 100%;
  display: block;
`;

export const OverlayImg = styled.img`
  position: absolute;
  object-fit: cover;
  top: ${(props) => props.top || "0"}px;
  left: ${(props) => props.left || "0"}px;
  z-index: ${(props) => props.zIndex || "1"};
`;

export const TochallengeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  height: 520px;
  zIndex: 3;

  background: rgba(255, 255, 255, 0.1); 
  backdrop-filter: blur(0.5px);
  box-shadow: 
    0 0 0 10px rgb(0, 0, 0) inset
    15px 5px 50px 0 rgb(0, 0, 0);
  border-radius: 110px;

  ${flexCenterColumn}
  gap:20px;
`

export const BannerH1 = styled.h1`
${FONT_STYLE.GIANTS.H1_REGULAR};
color: ${theme.PALLETE.hederandfooter};
`
export const BannerP = styled.p`
${FONT_STYLE.PRETENDARD.H5_MEDIUM};
`

export const ToChallengeLink = styled(Link)`
border: 1px solid #3385FF;
width: 270px;
height: 65px;
background-color: white;
border-radius: 5px;
${FONT_STYLE.PRETENDARD.H6_MEDIUM};
color: ${theme.PALLETE.mainblack};
${flexCenter};
`