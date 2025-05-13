import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 48px 64px;
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

export const Wrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  gap: 16px;
`;

export const ReviewsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
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
  margin-bottom: 28px;
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 133.333% */
`;

export const ImgList = styled.ul`
  margin-bottom: 28px;
  display: flex;
  gap: 48px;
  list-style: none;
`;

export const Item = styled.li`
  width: 292px;
  height: 312px;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Description = styled.p`
  margin-bottom: 60px;
  color: var(--Text, #475467);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
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
    padding-bottom: 24px;
  }
`;

export const Divider = styled.span`
  width: 1312px;
  display: block;
  margin-top: 24px;
  margin-bottom: 44px;
  height: 1px;
  background-color: var(--Gray-light, #dadde1);
`;

export const DetailsWrapper = styled.div`
  display: flex;
  gap: 40px;
`;
