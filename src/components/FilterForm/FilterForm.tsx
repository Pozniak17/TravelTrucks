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
import { FilterValues } from "../../types/Form.types";

const initialValues: FilterValues = {
  location: "",
  AC: false,
  transmission: "",
  kitchen: false,
  TV: false,
  bathroom: false,
  form: "",
};

export default function FilterForm({ onSubmit }) {
  const locationFieldId = useId();

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
              <Field type="checkbox" name="AC" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <img src={Automatic} alt="icon" />
              Automatic
              <Field type="checkbox" name="transmission" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <img src={Cup} alt="icon" />
              Kitchen
              <Field type="checkbox" name="kitchen" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <img src={TV} alt="icon" />
              TV
              <Field type="checkbox" name="TV" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <img src={Shower} alt="icon" />
              Bathroom
              <Field type="checkbox" name="bathroom" />
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
              <Field type="radio" name="form" value="panelTruck" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <img src="/icons/fully-integrated.svg" alt="Fully integrated" />
              Fully Integrated
              <Field type="radio" name="form" value="fullyIntegrated" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <img src="/icons/alcove.svg" alt="Alcove" />
              Alcove
              <Field type="radio" name="form" value="alcove" />
            </StyledLabel>
          </li>
        </List>

        <Button width="166px">Search</Button>
      </StyledForm>
    </Formik>
  );
}
