import { StyledButton } from "./Button.styled";

export default function Button({
  children,
  width,
  buttonstyle,
  type = "submit",
}) {
  return (
    <StyledButton type={type} $buttonstyle={buttonstyle} width={width}>
      {children}
    </StyledButton>
  );
}
