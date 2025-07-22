import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px 16px 18px;

  @media (min-width: 744px) {
    padding: 14px 24px;
  }
  @media (min-width: 1440px) {
    padding: 48px 64px;
    display: flex;
    gap: 64px;
  }
`;
