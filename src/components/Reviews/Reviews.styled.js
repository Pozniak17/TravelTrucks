import styled from "styled-components";

export const Wrapper = styled.div`
  width: 631px;
  margin-top: 56px;
`;

export const Block = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  margin-bottom: 44px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PersonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: var(--Badges, #f2f4f7);

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--Button, #e44848);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

export const Text = styled.p`
  margin-top: 16px;
  color: var(--Text, #475467);

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
