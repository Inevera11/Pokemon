import styled from "styled-components";

export const SearchButtonStyled = styled.button`
  background-color: #fff0;
  border-style: none;
  margin-left: 1rem;
  height: 1.5rem;
  width: 2rem;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const SearchStyled = styled.div`
  align-self: flex-start;
  height: 1.5rem;
  display: flex;
`;

export const IconStyled = styled.img`
  width: 1.5rem;
  &:hover {
    cursor: pointer;
    width: 2rem;
    transition: ease-in-out;
  }
`;

export const InputStyled = styled.input`
  margin-left: 1.5rem;
  height: 1.5rem;
  background-color: #fff0;
  color: #e7e0d2d3;
  font-variant: petite-caps;
  text-decoration: auto;
  font-size: 1.6rem;
  border-radius: 20px;
  padding: 1rem;
`;
