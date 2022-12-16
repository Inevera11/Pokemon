import { createContext, useContext, useState, ReactNode } from "react";
const getCoinsContext = createContext({} as Props);

type Props = {
  reduceCoins: (val: number) => void;
  moreCoins: (val: number) => void;
  getCoins: number;
};

type getCoinsProviderProps = {
  children: ReactNode;
};

export const useGetCoins = () => {
  return useContext(getCoinsContext);
};

export const GetCoinsProvider = ({ children }: getCoinsProviderProps) => {
  const [getCoins, setGetCoins] = useState<number>(25);

  console.log(getCoins);

  const reduceCoins = (val: number) => {
    setGetCoins((prev) => prev - val);
  };
  const moreCoins = (val: number) => {
    setGetCoins((prev) => prev + val);
  };
  return (
    <getCoinsContext.Provider value={{ getCoins, reduceCoins, moreCoins }}>
      {children}
    </getCoinsContext.Provider>
  );
};
