import { Wrapper, Img, Text } from "./Badges.styled";

interface BadgesProps {
  color?: string;
  path: string;
  title: string;
}

export default function Badges({
  color = "var(--Badges, #F2F4F7);",
  path,
  title,
}: BadgesProps) {
  return (
    <Wrapper color={color}>
      <Img src={path} alt="Badges icon" />
      <Text>{title}</Text>
    </Wrapper>
  );
}
