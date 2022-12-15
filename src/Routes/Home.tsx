import pokemon from "../images/pokemon-6.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PikachuStyled = styled.img`
  width: 30%;
  margin: 2.5rem;
`;

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleStyled = styled.h1`
  font-size: 4em;
  text-shadow: 13px 11px 10px #a90c0c;
  color: #eac912db;
  font-weight: 800;
  margin: 5rem;
  align-self: center;
`;
const SubtitleStyled = styled.p`
  color: #ffc00c;
  font-weight: 400;
  font-size: 2em;
  font-style: italic;
  text-shadow: 3px 1px 5px #f3db7b;
`;
const NavLinkStyled = styled(NavLink)`
  font-variant: petite-caps;
  text-decoration: auto;
  color: white;
  margin: 0.3rem;
  border: solid 2px white;
  padding: 1rem;
  border-radius: 40px;
  font-size: 1.5em;
`;

const Home = () => {
  return (
    <HomeStyled>
      <TitleStyled>Your Pokemons collection</TitleStyled>
      <PikachuStyled src={pokemon} />

      <SubtitleStyled> Start collecting your Pokemons today!</SubtitleStyled>
      <NavLinkStyled to="/myCards">Show collection</NavLinkStyled>
    </HomeStyled>
  );
};

export default Home;
