import { MouseEventHandler } from "react";
import { StyledButton } from "./Button.styled";

type ButtonProps = {
  children: React.ReactNode;
  width: number | string;
  buttonstyle: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  children,
  width,
  buttonstyle = "primary",
  type = "submit",
  onClick,
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      $buttonstyle={buttonstyle}
      $width={width}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
