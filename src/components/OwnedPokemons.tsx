import React from "react";
import styled from "styled-components";

type OwnedPokemonsProps = {
  pokemonNumber: number;
};

const OwnedPokemonsStyled = styled.div`
  margin: 1rem;
  justify-self: flex-end;
  margin-left: auto;
  padding: 1rem 1rem;
  font-variant: petite-caps;
  font-size: 2rem;

  color: #ffa600ec;
  font-weight: 700;
  background-color: #d7450752;
  border-radius: 20px;
`;

const OwnedPokemons = ({ pokemonNumber }: OwnedPokemonsProps) => {
  return (
    <OwnedPokemonsStyled>
      acquired pokemons:
      <span style={{ color: "#a00202", paddingLeft: "1rem" }}>
        {pokemonNumber}
      </span>
    </OwnedPokemonsStyled>
  );
};

export default OwnedPokemons;
