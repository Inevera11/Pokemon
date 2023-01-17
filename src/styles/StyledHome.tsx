import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PikachuStyled = styled.img`
  height: 45vh;
  margin: 2.5rem;
`;

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleStyled = styled.h1`
  font-size: 4em;
  text-shadow: 13px 11px 10px #a90c0c;
  color: #eac912db;
  font-weight: 800;
  margin: 4vh;
  align-self: center;
`;
export const SubtitleStyled = styled.p`
  color: #ffc00c;
  font-weight: 400;
  font-size: 2em;
  font-style: italic;
  text-shadow: 3px 1px 5px #f3db7b;
`;
export const NavLinkStyled = styled(NavLink)`
  font-variant: petite-caps;
  text-decoration: auto;
  color: white;
  margin: 0.3vh;
  border: solid 2px white;
  padding: 1rem;
  border-radius: 40px;
  font-size: 1.5em;
`;
