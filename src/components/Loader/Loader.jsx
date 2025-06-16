import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Overlay, SpinnerWrapper } from "./Loader.styled";

export const Loader = () => {
  return (
    <Overlay>
      <SpinnerWrapper>
        <DotLottieReact
          src="https://lottie.host/77dd1def-d6f9-4703-8966-6e9706a23451/XceVbcqj8D.lottie"
          loop
          autoplay
          speed={2}
          style={{ height: 220, width: "auto" }}
        />
      </SpinnerWrapper>
    </Overlay>
  );
};
