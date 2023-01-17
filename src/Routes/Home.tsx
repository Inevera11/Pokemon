import pokemon from "../images/pokemon-6.svg";
import {
  HomeStyled,
  TitleStyled,
  PikachuStyled,
  SubtitleStyled,
  NavLinkStyled,
} from "../styles/StyledHome";
import { InfoButton } from "../components/InfoButton";

const Home = () => {
  return (
    <>
      <HomeStyled>
        <TitleStyled>Your Pokemons collection</TitleStyled>
        <PikachuStyled src={pokemon} />
        <SubtitleStyled> Start collecting your Pokemons today!</SubtitleStyled>
        <NavLinkStyled to="/myCards">Show collection</NavLinkStyled>
      </HomeStyled>
      <InfoButton />
    </>
  );
};

export default Home;
