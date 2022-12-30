import { useLoaderData } from "react-router";
import { Card } from "../components/Card";
import { DeckStyled } from "../styles/StylesMyCards";
import { Pokemon } from "../types/interfaces";

type CardsType = {
  pokemonNumber: number;
};

export const Cards = ({ pokemonNumber }: CardsType) => {
  const data = (useLoaderData() as Pokemon[]).slice(0, pokemonNumber);

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
            types={item.types}
          />
        ))
      )}
    </DeckStyled>
  );
};
