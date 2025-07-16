import styled from "styled-components";

export const Hero = styled.section`
  width: 360px;
  height: 254px;
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

  @media (min-width: 1440px) {
    background-image: url("/images/Home/Desktop/desktop-1x.jpg");
    width: 100vw;
    height: 696px;
  }

  @media (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url("/images/Home/Desktop/desktop-2x.jpg");
    width: 100vw;
    height: 696px;
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

  @media (min-width: 1440px) {
    margin-bottom: 16px;

    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 66.667% */
  }
`;

export const Text = styled.h2`
  color: var(--Inputs, #f7f7f7);
  margin-bottom: 40px;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 100% */

  @media (min-width: 1440px) {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 133.333% */
  }
`;

export const Section = styled.section`
  width: 360px;
  height: 488px;
  padding: 47px 16px 143px 16px;
  background: linear-gradient(180deg, #080c09 0%, #000 100%);
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: block;
    padding: 0 64px;
  }
`;
