import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const BadgesList = styled.ul`
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 480px;
`;

export const StyledButton = styled(NavLink)`
  color: var(--White, #fff);

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;

  display: flex;
  width: 166px;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  border-radius: 200px;
  background-color: var(--Button, #e44848);
  border: inherit;
  cursor: pointer;
  transition-property: background-color, border;
  transition-duration: 300ms;

  &:hover,
  &:focus {
    background-color: var(--Button-Hover, #d84343);
    border: inherit;
  }
`;
