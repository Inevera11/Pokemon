import {
  SubtextStyled,
  ButtonStyled,
  ButtonAndTextStyled,
} from "../styles/ButtonStyled";
import React, { memo, useContext } from "react";
import { getCoinsContext } from "../context/getCoinsContext";

const Button = () => {
  const { reduceCoins, coins, morePokemons } = useContext(getCoinsContext);
  return (
    <ButtonAndTextStyled>
      <SubtextStyled>5 coins</SubtextStyled>
      <ButtonStyled
        onClick={() => {
          if (coins > 0) morePokemons(5);
          reduceCoins(5);
        }}
      >
        Buy new Pokemons
      </ButtonStyled>
    </ButtonAndTextStyled>
  );
};

export default memo(Button);
