import { useRef, useState, ReactNode } from "react";
import { getCoinsContext } from "./getCoinsContext";
type getCoinsProviderProps = {
  children: ReactNode;
};

export const GetCoinsProvider = ({ children }: getCoinsProviderProps) => {
  const [coins, setCoins] = useState<number>(25);
  const [pokemonNumber, setPokemonNumber] = useState<number>(20);
  const clicked = useRef<number>(5);

  const reduceCoins = (val: number) => {
    if (coins > 0) {
      setCoins((prev) => prev - val);
    }
  };
  const moreCoins = (val: number) => {
    if (clicked.current > 0) {
      setCoins((prev) => prev + val);
      clicked.current -= 1;
    }
  };
  const morePokemons = (val: number) => {
    setPokemonNumber((prev) => prev + val);
  };

  return (
    <getCoinsContext.Provider
      value={{
        coins,
        reduceCoins,
        moreCoins,
        morePokemons,
        pokemonNumber,
      }}
    >
      {children}
    </getCoinsContext.Provider>
  );
};
