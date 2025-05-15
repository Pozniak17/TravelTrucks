import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Button = styled.button`
  margin-top: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 16px 32px;
  width: 146px;
  border-radius: 200px;
  border: 1px solid var(--Gray-light, #dadde1);
  background-color: #fff;
  color: var(--Main, #101828);
  cursor: pointer;
  transition-property: border;
  transition-duration: 300ms;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;

  &:hover,
  &:focus {
    border: 1px solid var(--Button-Hover, #d84343);
  }
`;
