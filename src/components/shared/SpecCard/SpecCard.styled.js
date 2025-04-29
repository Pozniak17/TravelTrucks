import styled from "styled-components";

export const Container = styled.div`
  width: 112px;
  padding: 16px 18px;
  align-items: center;
  gap: 8px;

  border-radius: 12px;
  border: 1px solid var(--Gray-light, #dadde1);

  &:hover,
  &:focus {
    border: 1px solid var(--Button, #e44848);
  }
`;
