import { createContext, useContext, useState, ReactNode } from "react";
import { getCoinsContext } from "./getCoinsContext";
type getCoinsProviderProps = {
  children: ReactNode;
};

export const GetCoinsProvider = ({ children }: getCoinsProviderProps) => {
  const [coins, setCoins] = useState<number>(25);

  const reduceCoins = (val: number) => {
    setCoins((prev) => prev - val);
  };
  const moreCoins = (val: number) => {
    setCoins((prev) => prev + val);
  };
  return (
    <getCoinsContext.Provider value={{ coins, reduceCoins, moreCoins }}>
      {children}
    </getCoinsContext.Provider>
  );
};
