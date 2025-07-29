import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 32px 8px 40px;

  @media (min-width: 744px) {
    padding: 40px 24px 52px;
  }

  @media (min-width: 1440px) {
    padding: 48px 64px;
  }
`;

export const StyledWrapper = styled.div`
  width: 344px;
  border-radius: 20px;
  background: var(--White, #fff);

  @media (max-width: 1439px) {
    padding: 16px 8px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 744px) {
    width: 696px;
  }

  @media (min-width: 1440px) {
    width: 1312px;
  }
`;

export const Title = styled.h2`
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;

  @media (min-width: 744px) {
    font-size: 24px;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const TitleBlock = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 744px) {
    margin-bottom: 22px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 8px;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  gap: 16px;

  @media (min-width: 1440px) {
    margin-bottom: 48px;
  }
`;

export const ReviewsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--Main, #101828);

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--Main, #101828);

  /* Body */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const Text = styled.p`
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;

export const PriceTitle = styled.h2`
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;

  @media (min-width: 744px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const ImgList = styled.ul`
  margin-bottom: 28px;
  display: flex;
  justify-content: center;
  gap: 48px;
  list-style: none;
`;

export const Item = styled.li`
  cursor: pointer;
  width: 328px;
  object-fit: contain;
  border-radius: 10px;
  @media (min-width: 744px) {
    width: 524px;
  }
  @media (min-width: 1440px) {
    width: 292px;
    height: 312px;
    object-fit: cover;
  }
`;

export const Img = styled.img`
  transition: transform 0.4s ease-in-out;
  width: 328px;
  object-fit: contain;
  border-radius: 10px;
  @media (min-width: 744px) {
    width: 524px;
  }
  @media (min-width: 1440px) {
    width: 292px;
    height: 312px;
    object-fit: cover;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Description = styled.p`
  margin-bottom: 24px;
  color: var(--Text, #475467);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  @media (min-width: 744px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 60px;
  }
`;

export const TabList = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */

  text-decoration: none;

  &.active {
    border-bottom: 5px solid var(--Button, #e44848);
    padding-bottom: 15px;
  }

  @media (min-width: 744px) {
    &.active {
      padding-bottom: 24px;
    }
  }
`;

export const Divider = styled.span`
  display: block;
  margin-top: 16px;
  height: 1px;
  background-color: var(--Gray-light, #dadde1);
  @media (min-width: 744px) {
    margin-top: 25px;
  }
`;

export const WrapperBox = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    gap: 40px;
  }
`;
