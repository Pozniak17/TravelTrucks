import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardWrapper = styled.li`
  width: 888px;
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

export const BadgesList = styled.ul`
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 480px;
`;

export const StyledButton = styled(Link)`
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
