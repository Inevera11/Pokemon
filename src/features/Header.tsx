import logo from "../images/pokemon.png";
import { memo, useContext } from "react";
import coin from "../images/coin.png";

import {
  NavbarStyled,
  LogoStyled,
  CoinStyled,
  NavLinkStyled,
  RightSideStyled,
  CoinsStyled,
  PlusStyled,
} from "../styles/StyledHeader";
import { getCoinsContext } from "../context/getCoinsContext";

const Header = () => {
  const { coins, moreCoins } = useContext(getCoinsContext);

  return (
    <NavbarStyled>
      <LogoStyled src={logo} />
      <RightSideStyled>
        <PlusStyled
          onClick={() => {
            moreCoins(5);
          }}
        >
          +
        </PlusStyled>
        <CoinsStyled>{coins}</CoinsStyled>
        <CoinStyled src={coin} />
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/myCards">My Cards</NavLinkStyled>
      </RightSideStyled>
    </NavbarStyled>
  );
};

export default memo(Header);
