import { StyledButton } from "./Button.styled";

export default function Button({
  children,
  width,
  buttonstyle = "primary",
  type = "submit",
  onClick,
}) {
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
