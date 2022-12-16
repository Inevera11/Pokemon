import { useEffect, useState } from "react";
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
    const fetchPokemonData = async () => {
      const { results: allPokemonsData } = await fetchData(
        "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0"
      );

      const arrayOfPokemons: Pokemon[] = [];
      for await (const pokemon of allPokemonsData) {
        const { id, name, types } = await fetchData(pokemon.url);
        const newPokemon = {
          id,
          name,
          img:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            id +
            ".png",
          types: types.map(
            (pokemonType: { type: { name: string } }) => pokemonType.type.name
          ),
        };
        arrayOfPokemons.push(newPokemon);
      }
      console.log("xD");
      setData(arrayOfPokemons);
    };
    fetchPokemonData();
  }, []);

  return data;
};
