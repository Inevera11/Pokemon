import { createContext } from "react";
export const getCoinsContext = createContext({} as Props);

type Props = {
  reduceCoins: (val: number) => void;
  moreCoins: (val: number) => void;
  coins: number;
  morePokemons: (val: number) => void;
  pokemonNumber: number;
};
