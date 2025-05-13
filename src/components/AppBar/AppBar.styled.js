import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled(NavLink)`
  text-decoration: none;
`;

export const Header = styled.header`
  padding: 24px 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--Badges, #f2f4f7);
  background: var(--Inputs, #f7f7f7);
`;

export const Nav = styled.nav`
  margin-left: 450px;
  display: flex;
  gap: 32px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--Main, #101828);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  &.active {
    color: var(--Button-Hover, #d84343);
  }
`;
