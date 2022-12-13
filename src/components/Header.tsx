import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NavbarStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: space-around;
  justify-content: flex-end;
  background-color: #e4ae1b5c;
  border-radius: 32px;
  height: 8vh;
`;

const NavLinkStyled = styled(NavLink)`
  font-variant: petite-caps;
  text-decoration: auto;
  margin: 0.5rem;
  margin-right: 3rem;
  font-size: 1.5em;
`;

export const Header = () => {
  return (
    <NavbarStyled>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/myCards">My Cards</NavLinkStyled>
    </NavbarStyled>
  );
};
