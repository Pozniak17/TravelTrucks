import { Field, Form } from "formik";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 44px;
  width: 641px;
  padding: 44px 57px;
  border-radius: 10px;
  border: 1px solid var(--Gray-light, #dadde1);
`;

export const Title = styled.h3`
  margin-bottom: 8px;
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
`;

export const Text = styled.p`
  margin-bottom: 24px;
  color: var(--Gray, #6c717b);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled(Field)`
  width: 527px;
  height: 60px;
  padding: 18px;
  border-radius: 12px;
  background: var(--Inputs, #f7f7f7);
  border: inherit;
  margin-bottom: 14px;

  &:nth-last-child(2) {
    margin-bottom: 0;
    height: 118px;
  }
`;

export const StyledButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
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
