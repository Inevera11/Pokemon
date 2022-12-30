import styled from "styled-components";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { getCoinsContext } from "../context/getCoinsContext";

const ButtonStyled = styled.button`
  font-variant: petite-caps;
  font-weight: 600;
  font-size: 1.5em;
  color: #951ad6bd;
  text-shadow: 6px 3px 13px #e0a0a0;
  width: 14rem;
  height: 4rem;
  border-radius: 43px;
  background: #f9ff128c;
  border: #b1b135;
  border-style: double;
  box-shadow: 1px 0px 7px 3px #d07e1e, 6px 7px 15px 3px #780d0d;
`;

const SubtextStyled = styled.p`
  font-variant: petite-caps;
  font-style: italic;
  color: #151617ed;
  margin: 0.5rem;
`;

type Props = {
  setPokemonNumber: Dispatch<SetStateAction<number>>;
};

const ButtonAndTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 45%;
`;

const Button = ({ setPokemonNumber }: Props) => {
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

export default Button;
