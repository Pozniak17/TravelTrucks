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

export const StyledLink = styled(Link)`
  color: var(--White, #fff);
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;

  display: flex;
  width: 173px;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;

  border-radius: 200px;
  background-color: var(--Button, #e44848);
  border: inherit;
  cursor: pointer;
  transition-property: background-color, border;
  transition-duration: 300ms;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: var(--Button-Hover, #d84343);
    border: "inherit";
  }
`;
