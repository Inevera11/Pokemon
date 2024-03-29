import { Pokemon } from "../types/interfaces";

const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }
  const data = await response.json();
  return data;
};

const FetchPokemonData = async () => {
  const pokemonNumber = 65;
  const { results: allPokemonsData } = await fetchData(
    `https://pokeapi.co/api/v2/pokemon?limit=${pokemonNumber}&offset=0`
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
  return arrayOfPokemons;
};

export default FetchPokemonData;
