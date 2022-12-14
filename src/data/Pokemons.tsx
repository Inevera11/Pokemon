import React, { useEffect, useState } from "react";
import { Pokemon } from "../types/interfaces";

const fetchData = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0"
  );

  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }
  const data = await response.json();
  return data;
};

const fetchMoreData = async (url: string) => {
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
    fetchData()
      .then((data) => {
        data.results.forEach((pokemon: { name: string; url: string }) =>
          fetchMoreData(pokemon.url).then((data) =>
            setData((currData) => [...currData, data])
          )
        );
      })
      .catch((err) => console.log(err.message));
  }, []);
  if (data.length === 400) {
    return data;
  }
};
