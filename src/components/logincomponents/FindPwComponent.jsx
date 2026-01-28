import React from 'react';
import { openFindPw } from './function';

const FindPwComponent = () => {
  return (
    <div>
      <button onClick={openFindPw}>비밀번호 찾기</button>
    </div>
  );
};

export default FindPwComponent;