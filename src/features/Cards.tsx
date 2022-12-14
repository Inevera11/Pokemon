import styled from "styled-components";
import pokemonData from "../data/dummy.json";
import { Card } from "../components/Card";
import pikachu from "../data/pokem.jpg";
import { usePokemonData } from "../data/Pokemons";
import { Pokemon } from "../types/interfaces";

const DeckStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  align-content: space-around;
`;

export const Cards = () => {
  const getData = async () => {
    const data = (await usePokemonData) as () => Pokemon[];
    return data;
  };

  return (
    <DeckStyled>
      {pokemonData.map((item) => (
        <Card
          key={item.id}
          title={item.name}
          img={pikachu}
          skill1={item.skill1}
          skill2={item.skill2}
        />
      ))}
      )
    </DeckStyled>
  );
};
