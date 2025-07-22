import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px 16px 18px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media (min-width: 1440px) {
    padding-top: 35px;
  }
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
