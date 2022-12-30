import logo from "../images/pokemon.png";
import { useContext } from "react";

import {
  NavbarStyled,
  LogoStyled,
  NavLinkStyled,
} from "../styles/StyledHeader";
import { getCoinsContext } from "../context/getCoinsContext";

export const Header = () => {
  const { coins } = useContext(getCoinsContext);

  return (
    <NavbarStyled>
      <LogoStyled src={logo} />
      <div>
        <p>{coins}</p>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/myCards">My Cards</NavLinkStyled>
      </div>
    </NavbarStyled>
  );
};
