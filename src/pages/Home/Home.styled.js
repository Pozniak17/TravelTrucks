import { Link } from "react-router-dom";
import styled from "styled-components";

export const Hero = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #2a2a2a;
  background-image: url("/images/Home/HomeBG-1x.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-resolution: 192dpi) {
    background-image: url("/images/Home/HomeBG-2x.jpg");
  }
`;

export const Wrapper = styled.div`
  padding: 0 64px;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  color: var(--Inputs, #f7f7f7);
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 66.667% */
`;

export const Text = styled.h2`
  margin-bottom: 40px;
  color: var(--Inputs, #f7f7f7);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 133.333% */
`;
