import React, { useEffect, useState } from "react";
import { Pokemon } from "../types/interfaces";
const PokemonData = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>();

  const fetchData = async () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then(
      (response) =>
        response
          .json()
          .then((res) => setPokemons(res))
          .catch((err) => {
            console.log(err.message);
          })
    );
    console.log(pokemons);
  };
  return fetchData();
};

export default PokemonData;
