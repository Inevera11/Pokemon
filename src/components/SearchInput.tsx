import React from "react";
import search from "../images/search.png";
import styled from "styled-components";
import { useState, Dispatch, SetStateAction } from "react";
type Props = {
  value: (e: any) => void;
  setFilter: Dispatch<SetStateAction<string>>;
};

const SearchButtonStyled = styled.button`
  background-color: #fff0;
  border-style: none;
  margin-left: 1rem;
`;

const SearchStyled = styled.div`
  align-self: flex-start;
`;

const IconStyled = styled.img`
  width: 1.5rem;
`;

const InputStyled = styled.input`
  margin-left: 1rem;
  height: 1.5rem;
  background-color: #fff0;
  color: #e7e0d2d3;
  font-variant: petite-caps;
  text-decoration: auto;
  font-size: 1.6rem;
  border-radius: 20px;
  padding: 1rem;
`;

export const SearchInput = ({ value, setFilter }: Props) => {
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
