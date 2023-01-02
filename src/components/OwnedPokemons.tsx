import React from "react";
import { OwnedPokemonsStyled } from "../styles/OwnedPokemonsStyles";
import { OwnedPokemonsProps } from "../types/OwnedPokemonsType";

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
