import styled from "styled-components";

const ButtonStyled = styled.button`
  font-variant: petite-caps;
  font-weight: 600;
  color: #951ad6bd;
  text-shadow: 6px 3px 13px #e0a0a0;
  width: 12rem;
  height: 4rem;
  border-radius: 43px;
  background: #f9ff128c;
  border: #b1b135;
  border-style: double;
  box-shadow: 1px 0px 7px 3px #d07e1e, 6px 7px 15px 3px #780d0d;
`;

const SubtextStyled = styled.p`
  font-variant: petite-caps;
  font-style: italic;
  color: #151617ed;
  margin: 0.5rem;
`;

type Props = {
  onClick: () => void;
};

const Button = ({ onClick }: Props) => {
  return (
    <>
      <ButtonStyled onClick={onClick}>Buy new Pokemons</ButtonStyled>
      <SubtextStyled>5 coins</SubtextStyled>
    </>
  );
};

export default Button;
