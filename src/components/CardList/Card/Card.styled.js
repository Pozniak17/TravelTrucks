import styled from "styled-components";

export const CardWrapper = styled.li`
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

export const InfoWrapper = styled.div`
  width: 524px;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  color: var(--Main, #101828);

  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DetailsWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const Text = styled.p`
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const SupportText = styled.p`
  margin-bottom: 24px;
  overflow: hidden; //????
  color: var(--Text, #475467);
  text-overflow: ellipsis;
  /* Body */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
