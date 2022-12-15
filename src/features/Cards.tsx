import styled from "styled-components";
import pokemonData from "../data/dummy.json";
import { Card } from "../components/Card";
import pikachu from "../data/pokem.jpg";
import { usePokemonData } from "../data/Pokemons";
import { Pokemon } from "../types/interfaces";
import { DeckStyled } from "../styles/StylesMyCards";

export const Cards = () => {
  const data = usePokemonData().slice(0, 20);

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max * 10);
  }

  return (
    <DeckStyled>
      {data.length === 0 ? (
        <div>loading...</div>
      ) : (
        data.map((item) => (
          <Card
            key={getRandomInt(1000) * getRandomInt(item.id as number)}
            id={item.id}
            title={item.name}
            img={item.img}
            type1={item.type1 as string}
            type2={item.type2 as string}
          />
        ))
      )}
      )
    </DeckStyled>
  );
};
