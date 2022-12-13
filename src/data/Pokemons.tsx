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

  console.log("wnetrze fetcha", data);
  return data;
};

export const usePokemonData = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  console.log("value", data);

  const quantity = data.reduce((total) => total + 1, 0);
  console.log(quantity, "ilosc");

  if (quantity === 0) {
    fetchData()
      .then((data) => {
        setData(data.results);
      })
      .catch((err) => console.log(err.message));
    console.log("fetchuję");
  }

  if (quantity !== 0) {
    return data;
  }
};
