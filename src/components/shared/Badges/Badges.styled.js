import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  gap: 8px;
  align-items: stretch;

  padding: 12px 18px;

  color: var(--Main, #101828);
  text-align: center;

  border-radius: 100px;
  background: var(--Badges, #f2f4f7);

  /* Body 2 */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
`;

export const Text = styled.p`
  color: var(--Main, #101828);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;
