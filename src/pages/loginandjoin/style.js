import styled from "styled-components";
import { flexBetweenColumn, flexCenter, flexCenterColumn, FONT_STYLE } from "../../styles/common";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";

export const LoginScreen = styled.div`
  width : 100%;
  height: 100%;
  ${flexCenter}
`

export const LoginContainer = styled.div`
  width:360px;
  height: 600px;
`

export const LoginH1 = styled.div`
  ${FONT_STYLE.GIANTS.H3_BOLD};
  ${flexCenter};
  color : ${theme.PALLETE.hederandfooter}
`

export const IdContainer = styled.div`
  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  margin : 15px;
`
export const PasswordContainer = styled.div`
  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  margin : 15px;
`

export const LoginInput = styled.input`
  width : 100%;
  height :50px;
  border-radius : 5px;
  border : 1px solid ${theme.PALLETE.gray.footerMenu};
`

export const KeepLoginContainer = styled.label`
  display:flex ;
  margin: 0px 15px 20px 15px;
  gap: 5px;
  align-items: center;
  
`

export const KeepLoginCheck = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  -webkit-appearance: none; /* 사파리 지원 */
  width: 18px;
  height: 18px;
  border: 1px solid ${theme.PALLETE.gray.footerMenu};
  margin: 0px;
  border-radius: 20%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    filter: brightness(1.1);
  } 
  &:checked + span {
    color: ${theme.PALLETE.primary.main};
    border-color:${theme.PALLETE.primary.main};
    font-weight: bold;
  }
  &:checked {
  background-color: ${theme.PALLETE.primary.main};
  border-color:${theme.PALLETE.primary.main};
  }
  &:checked::after {
    content: '✔';
    color: white;
    font-size: 16px;
  }
`;

export const LabelText = styled.span`
  color: ${theme.PALLETE.gray.footerMenu}; /* 체크 안 됐을 때 기본 색상 */
  cursor: pointer;
`

export const ButtonContainer = styled.div`
width: 100%;
${flexCenter}
`

export const LoginButton = styled.button`
width: calc(100% - 30px);
height: 60px;
border-radius:8px;
${FONT_STYLE.PRETENDARD.H6_SEMIBOLD};
border: 1px solid ${theme.PALLETE.primary.main};
cursor: pointer;
  background-color: ${theme.PALLETE.primary.main};
  color: white;
  &:hover {
    filter: brightness(0.95);
  }
  &:active {
    filter: brightness(0.85);
  }
`

export const FindAndJoinContainer = styled.div`
width:clac(100%-30px);
margin:15px;
gap: 15px;
${flexCenter};
${FONT_STYLE.PRETENDARD.H7_LIGHT};
color:${theme.PALLETE.gray.footerSub};
`

export const StyledJoinLink = styled(Link)`
${FONT_STYLE.PRETENDARD.H7_REGULAR};
color:${theme.PALLETE.gray.footerSub};
`

export const StyledLoginFieldset = styled.fieldset`
width: calc(100% - 30px);
border-top:1px solid ${theme.PALLETE.gray[300]};
${flexCenter};
`

export const QuickContainer = styled.div`
width : calc(100% -30px);
${flexCenter};
`

export const LoginLegend = styled.legend`
color : ${theme.PALLETE.gray[300]};
`

export const QuickIconBox = styled.div`
${flexCenter};
gap: 20px;
margin:20px;
`
export const QuickIconImg = styled.img`
width : 56px;
cursor: pointer;
&: hover {
  filter:brightness(0.9);
}
`
/* ------------------------------------------------- */
export const JoinScreen = styled.div`
width: 100%;
height: 100%;
${flexCenter};
`

export const JoinH1 = styled.div`
  ${FONT_STYLE.GIANTS.H3_BOLD};
  ${flexCenter};
  color : ${theme.PALLETE.hederandfooter};
  margin: 60px 0px;
`

export const JoinContainer = styled.div`
width:360px;
height:600px;
${flexCenterColumn};
gap: 10px;
`

export const JoinByKakaoContainer = styled.label`
width: calc(100% - 30px);
${flexCenter};
background-color: #ffe940;
border-radius: 5px;
cursor:pointer;
margin: 0px 0px 10px 0px;
`

export const JoinByKakaoSpan = styled.span`
${FONT_STYLE.PRETENDARD.H7_BOLD};
color: ${theme.PALLETE.mainblack};
`

export const JoinBannerContainer = styled.div`
width : 360px;
height: 120px;
${flexCenter};
/* position: relative; */
`

export const JoinBanner = styled.img`
width: 330px;
object-fit : cover;
border-radius:10px;
margin: 0px 0px 20px 0px;
`

/* export const BannerText = styled.span`
  position: absolute;
  top: 50%;          
  left: 5%;          
  transform: translate(-50%, -50%); 
  
  color: white;       
  font-weight: bold;
`; */

export const JoinIconContainer = styled.div`
width : calc(100%);
${flexCenter};
margin: 0px 0px 10px 0px;
`

export const StyledJoinFieldset = styled.fieldset`
width: 330px;
border-top:1px solid ${theme.PALLETE.gray[200]};
${flexCenter};
`

export const JoinLegend = styled.legend`
color : ${theme.PALLETE.gray[200]};
`

export const JoinIconBox = styled.div`
${flexCenter};
gap: 30px;
margin:30px;
`
export const JoinIconImg = styled.img`
width : 56px;
cursor: pointer;
&: hover {
  filter:brightness(0.9);
}
`

export const JoinIconWrap = styled.div`
${flexCenterColumn};
gap: 5px;
`
export const JoinSpan = styled.span`
${FONT_STYLE.PRETENDARD.H7_REGULAR};
color:${theme.PALLETE.gray.footerSub};
`
export const ToLoginDiv = styled.div`
${FONT_STYLE.PRETENDARD.H7_REGULAR};
color:${theme.PALLETE.gray.footerSub};

`
export const JoinToLogin = styled(Link)`
${FONT_STYLE.PRETENDARD.H7_SEMIBOLD};
border-bottom: 1px solid ${theme.PALLETE.gray.footerSub};
`

/* ------------------------------------------------------- */
