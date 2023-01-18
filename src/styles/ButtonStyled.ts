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
  background-color: #442a6a00;
  transition: ease-in-out;
  box-shadow: 0px 2px 20px 20px #0700434d, inset 0px 0px 7px 5px #e1e2f066,
    -1px 0px 8px 4px #cbd0ffe3, inset 0px 1px 20px 20px #2700ff4d,
    inset 0px 1px 20px 20px #29938866, 0px 1px 20px 20px #e8d8ae66,
    inset 0px 1px 20px 20px #ff1ddd7d;
  color: #ffd900bf;
  top: 11vh;
  right: 42%;
  padding: 0.6rem;
  border-right-style: double;
  border-left-style: double;
  font-size: 1.5rem;
  font-weight: bolder;
  letter-spacing: 1px;
  border-radius: 40px;
  position: absolute;
  will-change: margin-top;
  font-style: italic;
  font-variant: petite-caps;
  animation-duration: 2s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  @keyframes slidein {
    from {
      right: 0%;
    }

    to {
      right: 42%;
    }
  }
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
