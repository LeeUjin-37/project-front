import React, { useState } from "react";
import S from "../../pages/myfridge/style";
import IngredientCard from "./IngredientCard";

const MODAL_CATEGORIES = ["채소", "육류", "해산물", "유제품", "가공품", "기타"];

const AddIngredientDetailModal = ({ onClose, onSubmit, baseIngredients }) => {
  const [activeCategory, setActiveCategory] = useState("육류");
  const [selectedItems, setSelectedItems] = useState({});

  const handleQuantityChange = (baseId, value) => {
    setSelectedItems((prev) => ({
      ...prev,
      [baseId]: { ...prev[baseId], quantity: value },
    }));
  };

  const handleDateChange = (baseId, value) => {
    setSelectedItems((prev) => ({
      ...prev,
      [baseId]: { ...prev[baseId], expiredAt: value },
    }));
  };

  const handleToggle = (baseId) => {
    setSelectedItems((prev) => {
      if (prev[baseId]) {
        const copied = { ...prev };
        delete copied[baseId];
        return copied;
      }
      return { ...prev, [baseId]: { quantity: "", expiredAt: "" } };
    });
  };

  const visibleBase = baseIngredients.filter(
    (x) => x.category === activeCategory,
  );

  const handleSubmit = () => {
    const result = Object.entries(selectedItems).map(([baseId, data]) => ({
      baseId: Number(baseId),
      quantity: data.quantity,
      expiredAt: data.expiredAt,
    }));

    onSubmit(result);
    onClose();
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalHeader>
          {MODAL_CATEGORIES.map((cat) => (
            <S.CategoryTab
              key={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </S.CategoryTab>
          ))}
        </S.ModalHeader>

        <S.ModalBody>
          <S.ModalGrid>
            {visibleBase.map((item) => (
              <IngredientCard
                key={item.id}
                name={item.name}
                icon={item.icon}
                active={!!selectedItems[item.id]}
                onClick={() => handleToggle(item.id)}
              />
            ))}
          </S.ModalGrid>

          <S.SelectedSection>
            <S.SelectedHeader>
              <div>재료명</div>
              <div>수량</div>
              <div>유통기한</div>
            </S.SelectedHeader>

            {Object.entries(selectedItems).map(([baseId, data]) => {
              const item = baseIngredients.find((v) => v.id === Number(baseId));
              if (!item) return null;

              return (
                <S.SelectedRow key={baseId}>
                  <div>{item.name}</div>
                  <input
                    type="number"
                    min="0"
                    value={data.quantity}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      handleQuantityChange(baseId, value < 0 ? 0 : value);
                    }}
                  />
                  <input
                    type="date"
                    value={data.expiredAt}
                    onChange={(e) => handleDateChange(baseId, e.target.value)}
                  />
                </S.SelectedRow>
              );
            })}

            <S.ModalFooter>
              <S.AddButton onClick={handleSubmit}>
                선택한 재료 추가하기
              </S.AddButton>
            </S.ModalFooter>
          </S.SelectedSection>
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default AddIngredientDetailModal;
