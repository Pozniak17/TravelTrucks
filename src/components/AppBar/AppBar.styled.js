import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled(NavLink)`
  text-decoration: none;
`;

export const Header = styled.header`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--Badges, #f2f4f7);
  background: var(--Inputs, #f7f7f7);
  @media (min-width: 744px) {
    padding: 24px;
  }
  @media (min-width: 1440px) {
    padding: 24px 64px;
    justify-content: flex-start;
  }
`;

export const Img = styled.img`
  width: 102px;
  height: 11px;

  @media (min-width: 744px) {
    width: 136px;
    height: 16px;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 744px) {
    display: flex;
    gap: 32px;
  }

  @media (min-width: 1440px) {
    margin-left: calc((100vw - 1440px) / 2 + 450px);
  }
`;

export const MobileNav = styled.nav`
  display: flex;
  gap: 24px;

  @media (min-width: 744px) {
    display: none;
  }
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
