export // 팝업 창의 크기와 위치 설정
const openKakaoLogin = () => {
  const width = 450;
  const height = 600;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;

  // 카카오 로그인 API 주소 (실제 연동 시 백엔드나 카카오 설정에서 받은 URL 사용)
  const KAKAO_AUTH_URL = ``;

  window.open(
    KAKAO_AUTH_URL,
    "KakaoLoginPopup",
    `width=${width},height=${height},left=${left},top=${top},resizable=no`,
  );
};

export // 팝업 창의 크기와 위치 설정
const openNaverLogin = () => {
  const width = 450;
  const height = 600;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;

  // 네이버 로그인 API 주소
  const NAVER_AUTH_URL = ``;

  window.open(
    NAVER_AUTH_URL,
    "NaverLoginPopup",
    `width=${width},height=${height},left=${left},top=${top},resizable=no`,
  );
};

export // 팝업 창의 크기와 위치 설정
const openAppleLogin = () => {
  const width = 450;
  const height = 600;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;

  // 애플 로그인 API 주소
  const APPLE_AUTH_URL = ``;

  window.open(
    APPLE_AUTH_URL,
    "AppleLoginPopup",
    `width=${width},height=${height},left=${left},top=${top},resizable=no`,
  );
};

export // 팝업 창의 크기와 위치 설정
const openEmailLogin = () => {
  const width = 450;
  const height = 600;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;

  // 이메일 로그인 API 주소
  const Email_AUTH_URL = ``;

  window.open(
    Email_AUTH_URL,
    "EmailLoginPopup",
    `width=${width},height=${height},left=${left},top=${top},resizable=no`,
  );
};
