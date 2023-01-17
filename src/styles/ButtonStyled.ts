import styled from "styled-components";

export const ButtonStyled = styled.button`
  font-variant: petite-caps;
  font-weight: 600;
  font-size: 1.5em;
  color: #951ad6bd;
  text-shadow: 6px 3px 13px #e0a0a0;
  width: 14rem;
  height: 4rem;
  border-radius: 43px;
  background: #f9ff128c;
  border: #b1b135;
  border-style: double;
  box-shadow: 1px 0px 7px 3px #d07e1e, 6px 7px 15px 3px #780d0d;
`;

export const StyledAlert = styled.div`
  background-color: #442a6a45;
  transition: ease-in-out;
  box-shadow: 0px 2px 20px 20px #e6be5866;
  color: #f1c65db5;
  top: 11vh;
  right: 45%;
  padding: 0.6rem;
  font-size: 1rem;
  font-weight: bolder;
  border-radius: 40px;
  position: absolute;
  will-change: margin-top;

  font-style: italic;
  font-variant: petite-caps;
`;

export const SubtextStyled = styled.p`
  font-variant: petite-caps;
  font-style: italic;
  color: #151617ed;
  margin: 0.5rem;
`;
export const ButtonAndTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 45%;
`;
