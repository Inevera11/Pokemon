import React from "react";
import search from "../images/search.png";
import {
  SearchButtonStyled,
  SearchStyled,
  IconStyled,
  InputStyled,
} from "../styles/SearchInputStyles";
import { useState } from "react";
import { InputTypes } from "../types/InputTypes";

export const SearchInput = ({ value, setFilter }: InputTypes) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <SearchStyled>
      <SearchButtonStyled
        onClick={() => {
          setShow((prev) => !prev);
          setFilter("");
        }}
      >
        <IconStyled src={search} />
      </SearchButtonStyled>
      {show && (
        <InputStyled placeholder="search..." type="search" onChange={value} />
      )}
    </SearchStyled>
  );
};
