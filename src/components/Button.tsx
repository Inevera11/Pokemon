import {
  StyledAlert,
  SubtextStyled,
  ButtonStyled,
  ButtonAndTextStyled,
} from "../styles/ButtonStyled";
import React, { memo, useContext, useState } from "react";
import { getCoinsContext } from "../context/getCoinsContext";

const Button = () => {
  const [visible, setVisible] = useState(false);
  const [currTimeout, setCurrTimeout] = useState<any>();
  const { reduceCoins, coins, morePokemons } = useContext(getCoinsContext);

  return (
    <>
      {visible && <StyledAlert>pokemons added</StyledAlert>}
      <ButtonAndTextStyled>
        <SubtextStyled>5 coins</SubtextStyled>
        <ButtonStyled
          onClick={() => {
            if (coins > 0) {
              morePokemons(5);
              reduceCoins(5);
              setVisible(true);
              if (currTimeout) clearTimeout(currTimeout);
              setCurrTimeout(setTimeout(() => setVisible(false), 1000));
            }
          }}
        >
          Buy new Pokemons
        </ButtonStyled>
      </ButtonAndTextStyled>
    </>
  );
};

export default memo(Button);
