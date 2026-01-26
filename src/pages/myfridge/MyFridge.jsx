import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIngredientModal from '../../components/myfridgecomponents/AddIngredientModal';
import IngredientList from '../../components/myfridgecomponents/IngredientList';
import AddIngredientDetailModal from '../../components/myfridgecomponents/AddIngredientDetailModal';

const MyFridge = () => {

  // "empty" : 재료가 없는 상태 (안내 모달 노출)
  // "add"   : 재료 추가 상세 모달 노출
  const [step, setStep] = useState("empty"); // empty | add

  return (
    <div>
      {/* 페이지 제목 */}
      <h1>나의 냉장고</h1>

      {/* 추천 요리 페이지로 이동하는 링크 */}
      <Link to={"/foodrecommendation"}>추천 요리 보기</Link>

      {/* 
        step이 "empty"가 아닐 때만 재료 grid를 보여줌
        → 재료가 하나라도 있는 상태를 의미
      */}
      {step !== "empty" && <IngredientList />}

      {/* 
        재료가 없는 상태일 때
        → “냉장고를 채워볼까요?” 같은 안내 모달 노출
        → 버튼 클릭 시 step을 "add"로 변경
      */}
      {step === "empty" && (
        <AddIngredientModal onNext={() => setStep("add")} />
      )}

      {/* 
        재료 추가 단계
        → 실제 재료를 선택하는 상세 모달
        → 닫기 시 다시 empty 상태로 복귀
      */}
      {step === "add" && (
        <AddIngredientDetailModal onClose={() => setStep("empty")} />
      )}
      <p>컴포넌트</p>
    </div>
  );
};

export default MyFridge;