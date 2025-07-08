import { Field, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

import {
  Wrapper,
  Title,
  Text,
  Input,
  StyledForm,
  ButtonWrapper,
  InputWrapper,
  Error,
  Textarea,
} from "./DetailForm.styled";
import Button from "../shared/Button/Button";

interface Values {
  username: string;
  email: string;
  date: string;
  message: string;
}

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Name is too short!")
    .max(20, "Name is too long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  date: Yup.date()
    .typeError("Must be a valid date!")
    .min(new Date(), "Date cannot be in the past!")
    .required("Required"),
  message: Yup.string()
    .min(3, "Too short")
    .max(256, "Too long")
    .required("Required"),
});

export default function DetailForm() {
  const handleSubmit = (values: Values, actions: FormikHelpers<Values>) => {
    console.log(values);
    toast.success("Successfully submitted!");
    actions.resetForm();
  };
  return (
    <Wrapper>
      <Title>Book your campervan now</Title>

      <Text>Stay connected! We are always ready to help you.</Text>

      <Formik
        initialValues={{ username: "", email: "", date: "", message: "" }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <StyledForm>
          <InputWrapper>
            <Input type="text" placeholder="Name*" name="username" />
            <Error name="username" component="span" />
          </InputWrapper>

          <InputWrapper>
            <Input type="email" placeholder="Email*" name="email" />
            <Error name="email" component="span" />
          </InputWrapper>

          <InputWrapper>
            <Input type="date" placeholder="Booking date*" name="date" />
            <Error name="date" component="span" />
          </InputWrapper>

          <InputWrapper>
            <Field as={Textarea} placeholder="Comment" name="message" />
            <Error name="message" component="span" last="true" />
          </InputWrapper>
          <ButtonWrapper>
            <Button width="166px" type="submit">
              Send
            </Button>
          </ButtonWrapper>
        </StyledForm>
      </Formik>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </Wrapper>
  );
}

// підключити yup
