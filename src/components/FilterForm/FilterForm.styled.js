import { Field, Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  width: 328px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 744px) {
    width: 696px;
  }

  @media (min-width: 1440px) {
    width: 360px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const Label = styled.label`
  color: var(--Gray, #6c717b);
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */

  @media (min-width: 1440px) {
    font-weight: 400;
  }
`;

export const Input = styled(Field)`
  padding: 18px;
  height: 56px;
  border-radius: 12px;
  background: var(--Inputs, #f7f7f7);
  border: inherit;

  color: var(--Gray, #6c717b);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  &:focus {
    color: var(--Main, #101828);
  }
`;

export const FiltersTitle = styled.h2`
  color: var(--Text, #475467);
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const Title = styled.h3`
  margin-top: 16px;
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;

  @media (min-width: 1440px) {
    margin-top: 32px;
  }
`;

export const Divider = styled.span`
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
  height: 1px;
  background-color: var(--Gray-light, #dadde1);

  @media (min-width: 744px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  align-items: flex-start;
  list-style: none;
  column-gap: 12px;
  row-gap: 8px;

  margin-bottom: 16px;

  @media (min-width: 744px) {
    flex-wrap: nowrap;
  }

  @media (min-width: 1440px) {
    margin-bottom: 32px;
    flex-wrap: wrap;
    &:last-of-type {
      margin-bottom: 40px;
    }
  }
`;

export const StyledLabel = styled.label`
  width: 96px;
  height: 83px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--Gray-light, #dadde1);
  border-radius: 12px;

  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.07px;

  cursor: pointer;

  input {
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }

  &:has(input:checked) {
    border: 1px solid var(--Button, #e44848);
  }

  @media (min-width: 1440px) {
    width: 112px;
    height: 96px;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--Gray-light, #dadde1);
    border-radius: 12px;

    text-align: center;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.08px;
  }
`;

export const Img = styled.img`
  width: 28px;
  height: 28px;

  @media (min-width: 1440px) {
    width: 32px;
    height: 32px;
  }
`;

export const StyledButton = styled.button`
  margin-top: 40px;
  width: 166px;
  border-radius: 200px;
  background: var(--Button, #e44848);
  padding: 16px;
  border: inherit;

  color: var(--White, #fff);

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;
  cursor: pointer;
`;
