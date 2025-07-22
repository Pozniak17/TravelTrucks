import styled from "styled-components";

export const CardWrapper = styled.li`
  list-style: none;
  width: 334px;
  padding: 16px 8px;
  border-radius: 20px;
  border: 1px solid var(--Gray-light, #dadde1);
  background: var(--White, #fff);
  @media (min-width: 744px) {
    width: 696px;
    padding: 24px;
    display: flex;
    gap: 24px;
  }
  @media (min-width: 1440px) {
    width: 888px;
  }
`;

export const Img = styled.img`
  width: 328px;
  height: 184px;
  border-radius: 10px;
  object-fit: cover;
  @media (min-width: 744px) {
    width: 292px;
    height: 320px;
    object-position: 65% center;
  }
`;

export const InfoWrapper = styled.div`
  @media (max-width: 743px) {
    margin-top: 24px;
  }
  @media (min-width: 1440px) {
    width: 524px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.h3`
  color: var(--Main, #101828);

  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  @media (max-width: 1439px) {
    max-width: 155px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
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

export const TextFirst = styled.p`
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  cursor: pointer;
`;

export const TextLast = styled.p`
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const SupportText = styled.p`
  overflow: hidden;
  color: var(--Text, #475467);
  text-overflow: ellipsis;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  margin-bottom: 24px;
`;

export const BadgesList = styled.ul`
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
