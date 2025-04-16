import { StyledButton } from "./Button.styled";

export default function Button({ children, width, variant }) {
  return (
    <StyledButton variant={variant} width={width}>
      {children}
    </StyledButton>
  );
}
