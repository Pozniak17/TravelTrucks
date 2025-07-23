import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";

interface Last {
  last?: string;
}

export const Wrapper = styled.div`
  margin-top: 24px;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid var(--Gray-light, #dadde1);
  @media (min-width: 1440px) {
    margin-top: 44px;
    width: 641px;
    padding: 44px 57px;
  }
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
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 12px;
  background: var(--Inputs, #f7f7f7);
  border: inherit;
  margin-bottom: 16px;
  @media (min-width: 1440px) {
    width: 527px;
    height: 60px;
    padding: 18px;
    border-radius: 12px;
    background: var(--Inputs, #f7f7f7);
    border: inherit;
    margin-bottom: 14px;
  }
`;

export const Textarea = styled(Field)`
  width: 100%;
  height: 80px;
  padding: 10px;
  border-radius: 5px;
  background: var(--Inputs, #f7f7f7);
  border: none;
  @media (min-width: 1440px) {
    width: 527px;
    height: 118px;
    border-radius: 10px;
    border: none;
    padding: 18px 18px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Error = styled(ErrorMessage)<Last>`
  position: absolute;
  top: ${(props) => (props.last ? "113px" : "56px")};
  left: 16px;
  font-size: 14px;
  color: green;
`;

export const ButtonWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;

  @media (min-width: 1440px) {
    margin-top: 24px;
  }
`;
