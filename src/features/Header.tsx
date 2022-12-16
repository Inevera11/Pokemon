import { useGetCoins } from "../context/getCoinsContext";
import logo from "../images/pokemon.png";
import {
  NavbarStyled,
  LogoStyled,
  NavLinkStyled,
} from "../styles/StyledHeader";
export const Header = () => {
  return (
    <NavbarStyled>
      <LogoStyled src={logo} />
      <div>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/myCards">My Cards</NavLinkStyled>
      </div>
    </NavbarStyled>
  );
};
