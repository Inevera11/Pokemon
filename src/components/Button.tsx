import {
  SubtextStyled,
  ButtonStyled,
  ButtonAndTextStyled,
} from "../styles/ButtonStyled";
import React, { memo, useContext } from "react";
import { getCoinsContext } from "../context/getCoinsContext";
import { ButtonTypes } from "../types/ButtonTypes";
const Button = ({ setPokemonNumber }: ButtonTypes) => {
  const { reduceCoins, coins } = useContext(getCoinsContext);
  return (
    <ButtonAndTextStyled>
      <SubtextStyled>5 coins</SubtextStyled>
      <ButtonStyled
        onClick={() => {
          if (coins > 0) setPokemonNumber((number) => number + 5);
          reduceCoins(5);
        }}
      >
        Buy new Pokemons
      </ButtonStyled>
    </ButtonAndTextStyled>
  );
};

export default memo(Button);
