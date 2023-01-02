import React, { memo, Dispatch, SetStateAction, useContext } from "react";

export type ButtonTypes = {
  setPokemonNumber: Dispatch<SetStateAction<number>>;
};
