import { useEffect, useState } from "react";
import { Pokemon } from "../types/interfaces";

type Props = {
  data: [];
  second: string | undefined;
  index: number;
};

const checkType = (val: string | undefined) => {
  if (typeof val === "string") return val;
  else return "none";
};

const checkIfExist = (data: [], second: string, index: number) => {
  if (data.length === 0) return "";
  if (data.length === index) return second;
};

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
              type1: checkIfExist(
                data.types,
                checkType(data.types[0].type.name),
                1
              ),
              type2: checkIfExist(
                data.types,
                checkType(data.types[1].type.name),
                2
              ),
            };

            setData((currData) => [...currData, newPokemon]);
          })
        );
      })
      .catch((err) => console.log(err.message));
  }, []);

  return data;
};
