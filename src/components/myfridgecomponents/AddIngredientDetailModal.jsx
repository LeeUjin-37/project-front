import React, { useState } from "react";
import { AddButton, CategoryTab, ModalBody, ModalContent, ModalFooter, ModalGrid, ModalHeader, ModalOverlay, SelectedHeader, SelectedRow, SelectedSection,} from "../../pages/myfridge/style";
import IngredientCard from "./IngredientCard";

const ingredients = [
  { id: 1, name: "돼지고기" },
  { id: 2, name: "소고기" },
  { id: 3, name: "항정살" },
];

const AddIngredientDetailModal = ({onClose}) => {
  // 선택된 재료 id 목록
  const [selectedIds, setSelectedIds] = useState([]);

  // 카드 클릭 시 토글
  const handleToggle = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((v) => v !== id) // 선택 해제
        : [...prev, id]               // 선택
    );
  };

  return (
    <ModalOverlay>
      <ModalContent>

        <ModalHeader>
          <CategoryTab>채소</CategoryTab>
          <CategoryTab active>육류</CategoryTab>
          <CategoryTab>해산물</CategoryTab>
          <CategoryTab>유제품</CategoryTab>
          <CategoryTab>가공식품</CategoryTab>
          <CategoryTab>기타</CategoryTab>
        </ModalHeader>

        <ModalBody>
          <ModalGrid>
            {ingredients.map((item) => (
              <IngredientCard
                key={item.id}
                name={item.name}
                active={selectedIds.includes(item.id)} 
                onClick={() => handleToggle(item.id)}   
              />
            ))}
          </ModalGrid>

          <SelectedSection>
            <SelectedHeader>
              <div>재료명</div>
              <div>수량</div>
              <div>유통기한</div>
            </SelectedHeader>

            {selectedIds.map((id) => {
              const item = ingredients.find((v) => v.id === id);
              return (
                <SelectedRow key={id}>
                  <div>{item.name}</div>
                  <input />
                  <input type="date" />
                </SelectedRow>
              );
            })}

            <ModalFooter>
              <AddButton onClick={onClose}>선택한 재료 추가하기</AddButton>
            </ModalFooter>
          </SelectedSection>
        </ModalBody>

      </ModalContent>
    </ModalOverlay>
  );
};

export default AddIngredientDetailModal;
