import React from "react";
import Button from "../components/Button";
import { Cards } from "../features/Cards";
import { MyCardsStyled } from "../styles/StylesMyCards";
import { useLoaderData } from "react-router";

const MyCards = () => {
  return (
    <MyCardsStyled>
      <Button onClick={() => console.log("data")} />
      <Cards />
    </MyCardsStyled>
  );
};

export default MyCards;
