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
  const data = usePokemonData().slice(0, 20);

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max * 1);
  }

  return (
    <DeckStyled>
      {data.length === 0 ? (
        <div>loading...</div>
      ) : (
        data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.name}
            img={item.img}
            types={item.type1 ? item.type1 : "none"}
          />
        ))
      )}
      )
    </DeckStyled>
  );
};
