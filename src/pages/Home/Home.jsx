import { Link } from "react-router-dom";
import Button from "../../components/shared/Button/Button";

import { Hero, Title, Text, StyledLink, Wrapper } from "./Home.styled";

export default function Home() {
  return (
    <Hero>
      <Wrapper>
        <Title>Campers of your dreams</Title>

        <Text>You can find everything you want in our catalog</Text>
        <StyledLink to="/catalog">View Now</StyledLink>
      </Wrapper>
    </Hero>
  );
}
