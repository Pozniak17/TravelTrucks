import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 24px;
  border-radius: 10px;

  @media (min-width: 744px) {
    width: 696px;
    margin-top: 40px;
    padding: 32px 40px 32px 40px;
    background: var(--Inputs, #f7f7f7);
  }
  @media (min-width: 1440px) {
    width: 631px;
    margin-top: 44px;
    padding: 44px 52px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  @media (min-width: 744px) {
    width: 462px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    width: 486px;
    gap: 8px;
    list-style: none;
  }
`;

export const Title = styled.h3`
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
`;

export const DetailsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Item = styled.li`
  display: flex;
  gap: 16px;
  justify-content: space-between;

  & span {
    color: var(--Main, #101828);
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }
`;
