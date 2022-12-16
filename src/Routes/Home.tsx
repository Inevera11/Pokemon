import pokemon from "../images/pokemon-6.svg";
import {
  HomeStyled,
  TitleStyled,
  PikachuStyled,
  SubtitleStyled,
  NavLinkStyled,
} from "../styles/StyledHome";
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
