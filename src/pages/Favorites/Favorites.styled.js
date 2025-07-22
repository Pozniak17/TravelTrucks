import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column; /* додано */
  background: linear-gradient(to bottom, thistle, plum, darkslateblue);

  box-sizing: border-box;

  @media (min-width: 1440px) {
    padding: 48px 64px;
  }
`;

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const Button = styled(Link)`
  color: var(--Button-Hover, #d84343);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
