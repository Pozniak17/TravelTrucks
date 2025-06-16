import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 35px;
  display: flex;
  flex-direction: column;

  align-items: center;
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
