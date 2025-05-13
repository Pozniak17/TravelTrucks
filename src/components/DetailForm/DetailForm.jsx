import { Formik } from "formik";
import {
  Wrapper,
  Title,
  Text,
  Input,
  StyledForm,
  StyledButton,
} from "./DetailForm.styled";

export default function DetailForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Wrapper>
      <Title>Book your campervan now</Title>

      <Text>Stay connected! We are always ready to help you.</Text>
      <Formik
        initialValues={{ username: "", email: "", date: "", message: "" }}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <Input type="text" placeholder="Name*" name="username" />

          <Input type="email" placeholder="Email*" name="email" />

          <Input type="date" placeholder="Booking date*" name="date" />

          <Input as="textarea" placeholder="Comment" name="message" />

          <StyledButton type="submit">Send</StyledButton>
        </StyledForm>
      </Formik>
    </Wrapper>
  );
}
