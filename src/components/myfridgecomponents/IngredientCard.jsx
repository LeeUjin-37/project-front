import React from "react";
import { CardStyle, CardTextStyle, IconStyle } from "../../pages/myfridge/style";

const IngredientCard = ({ name, active, onClick }) => {
  return (
    <CardStyle active={active} onClick={onClick}>
      <IconStyle>🥬</IconStyle>
      <CardTextStyle>{name}</CardTextStyle>
    </CardStyle>
  );
};

export default IngredientCard;
