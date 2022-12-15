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

export const NavLinkStyled = styled(NavLink)`
  font-variant: petite-caps;
  text-decoration: auto;
  margin: 0.5rem;
  margin-right: 3rem;
  font-size: 1.5em;
`;
