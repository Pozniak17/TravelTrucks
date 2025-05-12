import styled from "styled-components";

export const Wrapper = styled.div`
  width: 631px;
  /* height: 588px; */
  padding: 44px 52px;
  border-radius: 10px;
  background: var(--Inputs, #f7f7f7);
`;

export const List = styled.ul`
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  width: 486px;
  gap: 8px;
  list-style: none;
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
