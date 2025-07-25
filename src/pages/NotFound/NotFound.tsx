import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button, Wrapper } from "./NotFound.styled";
import Container from "../../components/shared/Container/Container";

export default function NotFound() {
  return (
    <Container>
      <Wrapper>
        <h1>Oops! We can't find that page.</h1>
        <p>It looks like the camper you're looking for isn't here.</p>
        <p>
          Return to <Button to="/">Homepage</Button>
        </p>

        <DotLottieReact
          src="https://lottie.host/447698dd-36ec-40c7-b646-67257da5ae82/1iT8Cd96wA.lottie"
          loop
          autoplay
          style={{ maxWidth: "700px", margin: "0 auto" }}
        />
      </Wrapper>
    </Container>
  );
}
