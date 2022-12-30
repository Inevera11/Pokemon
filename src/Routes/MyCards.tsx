import React, { useState } from "react";
import Button from "../components/Button";
import { Cards } from "../features/Cards";
import { MyCardsStyled } from "../styles/StylesMyCards";
import { useLoaderData } from "react-router";
import OwnedPokemons from "../components/OwnedPokemons";
import styled from "styled-components";

const PokemonBargainStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  justify-content: center;
  align-content: center;
`;

const MyCards = () => {
  const [pokemonNumber, setPokemonNumber] = useState<number>(20);

  return (
    <MyCardsStyled>
      <PokemonBargainStyled>
        <Button onClick={() => setPokemonNumber((number) => number + 5)} />
        <OwnedPokemons pokemonNumber={pokemonNumber} />
      </PokemonBargainStyled>
      <Cards pokemonNumber={pokemonNumber} />
    </MyCardsStyled>
  );
};

export default MyCards;
