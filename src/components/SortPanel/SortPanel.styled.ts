import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 24px;
  width: 328px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 744px) {
    width: 696px;
    align-items: flex-end;
  }
  @media (min-width: 1440px) {
    padding-right: 20px;
    width: 100%;
    align-items: flex-end;
  }
`;

export const Label = styled.label`
  padding-left: 4px;
  color: var(--Gray, #6c717b);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 9px;

  @media (min-width: 744px) {
    padding-left: 0;
  }
`;

export const Select = styled.select`
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 110% */
  border: none;

  @media (min-width: 744px) {
    font-size: 22px;
  }
`;
