import React from "react";
import pokemonData from "../data/dummy.json";
import { Card } from "../components/Card";

export const Cards = () => {
  return (
    <>
      {pokemonData.map((item) => (
        <Card
          key={item.id}
          title={item.name}
          img={item.image}
          skill1={item.skill1}
          skill2={item.skill2}
        />
      ))}
    </>
  );
};
