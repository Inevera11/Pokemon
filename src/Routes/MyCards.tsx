import React from "react";
import Button from "../components/Button";
import { Cards } from "../features/Cards";
import { MyCardsStyled } from "../styles/StylesMyCards";
const MyCards = () => {
  return (
    <MyCardsStyled>
      <Button onClick={() => console.log("data")} />
      <Cards />
    </MyCardsStyled>
  );
};

export default MyCards;
