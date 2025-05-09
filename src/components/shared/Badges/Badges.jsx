import { Wrapper, Img, Text } from "./Badges.styled";

export default function Badges({ path, title }) {
  return (
    <Wrapper>
      <Img src={path} alt="Badges icon" />
      <Text>{title}</Text>
    </Wrapper>
  );
}
