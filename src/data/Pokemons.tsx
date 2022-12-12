import React, { useEffect, useState } from "react";
import { Pokemon } from "../types/interfaces";
const PokemonData = () => {
  useEffect(() => {
    fetchData()
      .then((data) => {
        setPokemons(data.results.slice(0, 10));
        console.log("got it", data.results.slice(0, 10));
      })
      .catch((err) => console.log(err.message));
  }, []);

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

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

  console.log("pokemons", pokemons);
  return pokemons;
};

export default PokemonData;
