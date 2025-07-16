import { StyledLink } from "../../components/shared/Button/Button.styled";
import { Hero, Title, Text, Section, Wrapper } from "./Home.styled";

export default function Home() {
  return (
    <>
      <Hero>
        <Wrapper>
          <Title>Campers of your dreams</Title>

          <Text>You can find everything you want in our catalog</Text>
          <StyledLink $buttonstyle="primary" $width="173px" to="/catalog">
            View Now
          </StyledLink>
        </Wrapper>
      </Hero>

      <Section>
        <Title>Campers of your dreams</Title>
        <Text>You can find everything you want in our catalog</Text>
        <StyledLink $buttonstyle="primary" $width="100%" to="/catalog">
          View Now
        </StyledLink>
      </Section>
    </>
  );
}
