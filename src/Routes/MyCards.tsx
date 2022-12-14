import React from "react";
import Button from "../components/Button";
import { Cards } from "../features/Cards";
import styled from "styled-components";

const MyCardsStyled = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const MyCards = () => {
  return (
    <MyCardsStyled>
      <Button onClick={() => console.log("data")} />
      <Cards />
    </MyCardsStyled>
  );
};

export default MyCards;
