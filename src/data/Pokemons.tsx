import React, { useEffect, useState } from "react";
import { Pokemon } from "../types/interfaces";

const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }
  const data = await response.json();
  return data;
};

export const usePokemonData = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  useEffect(() => {
    console.log("fetchuję");
    fetchData("https://pokeapi.co/api/v2/pokemon?limit=200&offset=0")
      .then((data) => {
        data.results.forEach((pokemon: { name: string; url: string }) =>
          fetchData(pokemon.url).then((data) => {
            const newPokemon = {
              id: data.id,
              name: data.name,
              img:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                data.id +
                ".png",
              type1: data.types,
            };
            console.log(data.types);
            setData((currData) => [...currData, newPokemon]);
          })
        );
      })
      .catch((err) => console.log(err.message));
  }, []);

  return data;
};
