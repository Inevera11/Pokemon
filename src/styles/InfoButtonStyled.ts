import styled from "styled-components";
import { Button } from "evergreen-ui";
export const ButtonStyled = styled(Button)`
  margin: 1% 3%;
  margin-top: 0;
  float: right;
  position: fixed;
  right: 0;
  bottom: 0;
  font-style: italic;
  font-weight: bolder;
  font-size: 2rem;
  font-family: initial;
  border-radius: 40px;
  padding: 1.2rem;
  border: 1px solid #8f95b2;
  background-color: #fafbffc4;
  &:hover {
    box-shadow: 0 0 11px 4px #e3edece6;
  }
`;
