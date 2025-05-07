import { Field, Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  width: 360px;
`;

export const Wrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: var(--Gray, #6c717b);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
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
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

export const Title = styled.h3`
  margin-top: 32px;
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
`;

export const Divider = styled.span`
  display: block;
  margin-top: 24px;
  margin-bottom: 24px;
  height: 1px;
  background-color: var(--Gray-light, #dadde1);
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  align-items: flex-start;
  list-style: none;
  column-gap: 12px;
  row-gap: 8px;

  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const StyledLabel = styled.label`
  width: 112px;
  height: 96px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--Gray-light, #dadde1);
  border-radius: 12px;

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
