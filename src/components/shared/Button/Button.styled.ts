import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

type StyledButtonProps = {
  $buttonstyle?: "primary" | "secondary";
  $width: string | number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const buttonVariants = {
  primary: css`
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.button};
    border: inherit;
    &:hover,
    &:focus {
      background-color: ${(props) => props.theme.colors.buttonHover};
      border: inherit;
    }
  `,
  secondary: css`
    color: ${(props) => props.theme.colors.main};
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.grayLight};
    &:hover,
    &:focus {
      background-color: inherit;
      border: 1px solid ${(props) => props.theme.colors.buttonHover};
    }
  `,
};

export const commonStyles = css<StyledButtonProps>`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;

  text-decoration: none;
  display: flex;
  width: ${(props) => props.$width};
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  cursor: pointer;
  width: ${({ $width }) => $width || "auto"};
  transition-property: background-color, border;
  transition-duration: 300ms;

  ${({ $buttonstyle = "primary" }) =>
    buttonVariants[$buttonstyle] || buttonVariants.primary}
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${commonStyles}
`;

export const StyledLink = styled(Link)<StyledButtonProps>`
  ${commonStyles}
`;
