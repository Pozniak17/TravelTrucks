import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 24px;
  @media (min-width: 744px) and (max-width: 1439px) {
    margin-top: 32px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  @media (min-width: 1440px) {
    margin-top: 40px;
  }
`;
