import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: space-around;
  justify-content: space-between;
  background-color: #e4ae1b5c;
  border-radius: 32px;
  height: 8vh;
`;

export const LogoStyled = styled.img`
  height: 70%;
  margin-left: 4rem;
`;

export const RightSideStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CoinStyled = styled.img`
  width: 4rem;
  margin-right: 2rem;
`;
export const CoinsStyled = styled.span`
  margin-right: 1rem;
  font-variant: petite-caps;
  text-decoration: auto;
  font-size: 1.7em;
  color: #e5ca6c;
    text-shadow: 0 0 4px #c80e0e;
    font-weight: 700;
}
`;

export const PlusStyled = styled.button`
  
  font-variant: petite-caps;
  text-decoration: auto;
  font-size: 1.7em;
  color: #e93a2a;
    
    font-weight: 700;
     background-color: #fff0;
     border-style: none
}
`;

export const NavLinkStyled = styled(NavLink)`
  font-variant: petite-caps;
  text-decoration: auto;
  margin: 0.5rem;
  margin-right: 3rem;
  font-size: 1.5em;
`;
