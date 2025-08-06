import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const MenuNav = styled.nav<{ $status: boolean }>`
  position: absolute;
  top: 58px;
  left: -100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 56px;
  background: var(--Inputs, #f7f7f7);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s linear;

  ${({ $status }) =>
    $status &&
    css`
      transform: translateX(100%);
    `}
`;

export const List = styled.ul`
  list-style: none;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Item = styled.li`
  padding: 8px 16px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  &.active {
    color: #e76712; /* Колір для іконки й тексту */
  }
`;
