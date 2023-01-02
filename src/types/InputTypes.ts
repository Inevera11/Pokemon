import { Dispatch, SetStateAction } from "react";

export type InputTypes = {
  value: (e: any) => void;
  setFilter: Dispatch<SetStateAction<string>>;
};
