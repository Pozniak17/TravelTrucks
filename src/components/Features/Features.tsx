import { useOutletContext } from "react-router-dom";
import { Divider } from "../FilterForm/FilterForm.styled";
import Badges from "../shared/Badges/Badges";
import { Wrapper, List, DetailsList, Item, Title } from "./Features.styled";
import { CamperOptions } from "../../types/Card.types";

export default function Features() {
  const details = useOutletContext<CamperOptions>();

  return (
    <Wrapper>
      <List>
        <Badges path="/icons/automatic.svg" title="Automatic" />
        <Badges path="/icons/wind.svg" title="AC" />
        <Badges path="/icons/petrol.svg" title="Petrol" />
        <Badges path="/icons/cup.svg" title="Kitchen" />
        <Badges path="/icons/radio.svg" title="Radio" />
      </List>

      <Title>Vehicle details</Title>
      <Divider />

      <DetailsList>
        <Item>
          <span>Form</span>
          <span>{details.form}</span>
        </Item>
        <Item>
          <span>Length</span>
          <span>{details.length}</span>
        </Item>
        <Item>
          <span>Width</span>
          <span>{details.width}</span>
        </Item>
        <Item>
          <span>Height</span>
          <span>{details.height}</span>
        </Item>
        <Item>
          <span>Tank</span>
          <span>{details.tank}</span>
        </Item>
        <Item>
          <span>Consumption</span>
          <span>{details.consumption}</span>
        </Item>
      </DetailsList>
    </Wrapper>
  );
}
