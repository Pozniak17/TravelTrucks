import { Wrapper, Img, Text } from "./Badges.styled";

export default function Badges({
  color = "var(--Badges, #F2F4F7);",
  path,
  title,
}) {
  return (
    <Wrapper color={color}>
      <Img src={path} alt="Badges icon" />
      <Text>{title}</Text>
    </Wrapper>
  );
}
