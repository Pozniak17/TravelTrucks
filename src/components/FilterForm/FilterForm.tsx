import { useId } from "react";
import { Formik, Field, FormikHelpers } from "formik";
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
  Img,
} from "./FilterForm.styled";

import Wind from "/icons/wind.svg";
import Automatic from "/icons/automatic.svg";
import Cup from "/icons/cup.svg";
import TV from "/icons/tv.svg";
import Shower from "/icons/shower.svg";
import Button from "../shared/Button/Button";
import { FilterValues } from "../../types/Form.types";

export type FilterFormProps = {
  onSubmit: (
    values: FilterValues,
    formikHelpers: FormikHelpers<FilterValues>
  ) => void;
};

const initialValues: FilterValues = {
  location: "",
  AC: false,
  transmission: "",
  kitchen: false,
  TV: false,
  bathroom: false,
  form: "",
};

export default function FilterForm({ onSubmit }: FilterFormProps) {
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
              <Img src={Wind} alt="icon" />
              AC
              <Field type="checkbox" name="AC" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <Img src={Automatic} alt="icon" />
              Automatic
              <Field type="checkbox" name="transmission" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <Img src={Cup} alt="icon" />
              Kitchen
              <Field type="checkbox" name="kitchen" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <Img src={TV} alt="icon" />
              TV
              <Field type="checkbox" name="TV" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <Img src={Shower} alt="icon" />
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
              <Img src="/icons/van.svg" alt="Van" />
              Van
              <Field type="radio" name="form" value="panelTruck" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <Img src="/icons/fully-integrated.svg" alt="Fully integrated" />
              Fully Integrated
              <Field type="radio" name="form" value="fullyIntegrated" />
            </StyledLabel>
          </li>

          <li>
            <StyledLabel>
              <Img src="/icons/alcove.svg" alt="Alcove" />
              Alcove
              <Field type="radio" name="form" value="alcove" />
            </StyledLabel>
          </li>
        </List>

        <Button width="100%">Search</Button>
      </StyledForm>
    </Formik>
  );
}
