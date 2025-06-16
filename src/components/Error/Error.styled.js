import styled from "styled-components";

export const ErrorCard = styled.div`
  width: 888px;
  height: 368px;
  padding: 24px;
  display: flex;
  gap: 24px;
  list-style: none;
  border-radius: 20px;
  border: 1px solid var(--Gray-light, #dadde1);
  background: var(--White, #fff);
`;

export const Img = styled.img`
  width: 292px;
  height: 320px;
  border-radius: 10px;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

export const Text = styled.p`
  margin-bottom: 24px;
`;

export const ClearButton = styled.button`
  color: var(--White, #fff);

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;

  display: flex;
  width: 166px;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  border-radius: 200px;
  background-color: var(--Button, #e44848);
  border: inherit;
  cursor: pointer;
  transition-property: background-color, border;
  transition-duration: 300ms;

  &:hover,
  &:focus {
    background-color: var(--Button-Hover, #d84343);
    border: inherit;
  }
`;
