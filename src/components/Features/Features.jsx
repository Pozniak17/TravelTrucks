import { Divider } from "../FilterForm/FilterForm.styled";
import Badges from "../shared/Badges/Badges";
import { Wrapper, List, DetailsList, Item } from "./Features.styled";

export default function Features() {
  return (
    <Wrapper>
      <List>
        <Badges path="/icons/automatic.svg" title="Automatic" />
        <Badges path="/public/icons/wind.svg" title="AC" />
        <Badges path="/public/icons/petrol.svg" title="Petrol" />
        <Badges path="/public/icons/cup.svg" title="Kitchen" />
        <Badges path="/public/icons/radio.svg" title="Radio" />
      </List>

      <h3>Vehicle details</h3>
      <Divider />

      <DetailsList>
        <Item>
          <span>Form</span>
          <span>Panel truck</span>
        </Item>
        <Item>
          <span>Length</span>
          <span>5.4 m</span>
        </Item>
        <Item>
          <span>Width</span>
          <span>2.01 m</span>
        </Item>
        <Item>
          <span>Height</span>
          <span>2.05 m</span>
        </Item>
        <Item>
          <span>Tank</span>
          <span>132 I</span>
        </Item>
        <Item>
          <span>Consumption</span>
          <span>12.4l/100km</span>
        </Item>
      </DetailsList>
    </Wrapper>
  );
}
