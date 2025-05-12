import { Field, Form } from "formik";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 641px;
  padding: 44px;
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
  line-height: 24px; /* 150% */
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
`;

export const Input = styled(Field)`
  height: 60px;
  padding: 18px;
  border-radius: 12px;
  background: var(--Inputs, #f7f7f7);
  border: inherit;
`;
