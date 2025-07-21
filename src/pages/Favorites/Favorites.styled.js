import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* додано */
  background: linear-gradient(to bottom, thistle, plum, darkslateblue);

  min-height: 100vh;
  padding: 48px 64px;
  box-sizing: border-box;
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
