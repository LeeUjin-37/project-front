import React from "react";
import * as S from "./style";

/**
 * options: [{ key, label }]
 * value: 현재 선택 key
 * onChange: (key) => void
 */
const SortTab = ({ options = [], value, onChange }) => {
  return (
    <S.SortTabWrapper>
      {options.map((opt) => (
        <S.SortTabButton
          key={opt.key}
          type="button"
          $active={opt.key === value}
          onClick={() => onChange?.(opt.key)}
        >
          {opt.label}
        </S.SortTabButton>
      ))}
    </S.SortTabWrapper>
  );
};

export default SortTab;
