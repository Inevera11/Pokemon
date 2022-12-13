import React from "react";
import Button from "../Button";
import { Cards } from "../../features/Cards";
import { usePokemonData } from "../../data/Pokemons";
import styled from "styled-components";

const MyCardsStyled = styled.div`
  margin-top: 4rem;
`;

const MyCards = () => {
  const data = usePokemonData();
  return (
    <MyCardsStyled>
      <Button onClick={() => console.log("data")} />
      <Cards />
    </MyCardsStyled>
  );
};

export default MyCards;
