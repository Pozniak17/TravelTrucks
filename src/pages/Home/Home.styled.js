import styled from "styled-components";

export const Hero = styled.section`
  width: 100%;
  aspect-ratio: 1440 / 696;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #2a2a2a;
  background-image: url("/images/Home/Mobile/mobile-1x.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-resolution: 192dpi) {
    background-image: url("/images/Home/Mobile/mobile-2x.jpg");
  }

  @media (min-width: 744px) {
    background-image: url("/images/Home/Tablet/tablet-1x.jpg");
    width: 100%;
    aspect-ratio: 1440 / 600;
  }

  @media (min-width: 744px) and (min-resolution: 192dpi) {
    background-image: url("/images/Home/Tablet/tablet-2x.jpg");
    width: 100%;
  }

  @media (min-width: 1440px) {
    background-image: url("/images/Home/Desktop/desktop-1x.jpg");
    width: 100%;
    aspect-ratio: 1440 / 696;
  }

  @media (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url("/images/Home/Desktop/desktop-2x.jpg");
    width: 100%;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: 47px 16px 143px 16px;
  background: linear-gradient(180deg, #080c09 0%, #000 100%);

  @media (min-width: 744px) {
    height: 461px;
    padding: 98px 87px 187px 87px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const Title = styled.h1`
  color: var(--Inputs, #f7f7f7);
  font-family: Inter;
  font-size: 38px;
  font-style: normal;
  font-weight: 800;
  line-height: 32px;
  margin-bottom: 24px;

  @media (min-width: 744px) {
    margin-bottom: 16px;

    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
`;

export const Text = styled.h2`
  color: var(--Inputs, #f7f7f7);
  margin-bottom: 40px;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media (min-width: 744px) {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
`;

export const Wrapper = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: block;
    padding: 0 64px;
  }
`;

export const ButtonWrapper = styled.div`
  @media (min-width: 744px) {
    text-align: start;
    width: 173px;
  }
`;

export const SecondWrapper = styled.div`
  @media (min-width: 744px) {
    width: 571px;
    margin-left: auto;
    margin-right: auto;
  }
`;
