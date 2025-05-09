import styled from "styled-components";

export const Title = styled.h2`
  margin-bottom: 8px;
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

export const ReviewsWrapper = styled.div`
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
