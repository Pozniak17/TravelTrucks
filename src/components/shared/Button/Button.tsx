import { StyledButton } from "./Button.styled";

type ButtonProps = {
  children: React.ReactNode;
  width: number | string;
  buttonstyle: string;
  type: "button" | "submit";
  onClick: any;
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
