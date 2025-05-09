import { useId } from "react";
import { Formik, Field } from "formik";
import {
  StyledForm,
  Wrapper,
  Label,
  Input,
  FiltersTitle,
  Title,
  Divider,
  List,
  StyledLabel,
} from "./FilterForm.styled";

import Wind from "/icons/wind.svg";
import Automatic from "/icons/automatic.svg";
import Cup from "/icons/cup.svg";
import TV from "/icons/tv.svg";
import Shower from "/icons/shower.svg";
import Button from "../shared/Button/Button";

export default function FilterForm() {
  const locationFieldId = useId();

  const handleSubmit = (value, actions) => {
    console.log(value);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ location: "", equipment: [], type: "" }}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <Wrapper>
          <Label htmlFor={locationFieldId}>Location</Label>
          <Input
            type="text"
            placeholder="City"
            name="location"
            id={locationFieldId}
          />
        </Wrapper>

        <FiltersTitle>Filters</FiltersTitle>

        <Title>Vehicle equipment</Title>
        <Divider />

        <List>
          <li>
            <StyledLabel>
              <img src={Wind} alt="icon" />
              AC
              <Field type="checkbox" name="equipment" value="ac" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <img src={Automatic} alt="icon" />
              Automatic
              <Field type="checkbox" name="equipment" value="automatic" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <img src={Cup} alt="icon" />
              Kitchen
              <Field type="checkbox" name="equipment" value="kitchen" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <img src={TV} alt="icon" />
              TV
              <Field type="checkbox" name="equipment" value="tv" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <img src={Shower} alt="icon" />
              Bathroom
              <Field type="checkbox" name="equipment" value="bathroom" />
            </StyledLabel>
          </li>
        </List>

        <Title>Vehicle type</Title>
        <Divider />

        <List>
          <li>
            <StyledLabel>
              <img src="/icons/van.svg" alt="Van" />
              Van
              <Field type="radio" name="type" value="van" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <img src="/icons/fully-integrated.svg" alt="Fully integrated" />
              Fully Integrated
              <Field type="radio" name="type" value="fully integrated" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <img src="/icons/alcove.svg" alt="Alcove" />
              Alcove
              <Field type="radio" name="type" value="alcove" />
            </StyledLabel>
          </li>
        </List>

        <Button width="166px" buttonstyle={"general"}>
          Search
        </Button>
      </StyledForm>
    </Formik>
  );
}
