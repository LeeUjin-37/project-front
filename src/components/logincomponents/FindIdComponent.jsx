import React from 'react';
import { openFindId } from './function';

const FindIdComponent = () => {
  return (
    <div>
      <button onClick={openFindId}>아이디 찾기</button>
    </div>
  );
};

export default FindIdComponent;