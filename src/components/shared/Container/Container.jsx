import { Wrapper } from "./Container.styled";

export default function Container({
  color = "inherit",
  justifyContent = "",
  children,
}) {
  return (
    <Wrapper color={color} justifyContent={justifyContent}>
      {children}
    </Wrapper>
  );
}
