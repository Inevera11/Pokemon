import { useLoaderData } from "react-router";
import Card from "../components/Card";
import { DeckStyled } from "../styles/StylesMyCards";
import { Pokemon } from "../types/interfaces";
import React, { memo } from "react";
import { CardsType } from "../types/CardsType";

const Cards = ({ pokemonNumber, filter }: CardsType) => {
  const data = (useLoaderData() as Pokemon[]).slice(0, pokemonNumber);
  if (filter !== "") {
    data.filter((item) => item.name.includes(filter));
  }

  return (
    <DeckStyled>
      {data.length === 0 ? (
        <div>loading...</div>
      ) : (
        data
          .filter((item) => item.name.includes(filter))
          .map((item) => (
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

export default memo(Cards);
