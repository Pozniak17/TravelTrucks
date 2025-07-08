import { useOutletContext } from "react-router-dom";
import { Divider } from "../FilterForm/FilterForm.styled";
import Badges from "../shared/Badges/Badges";
import { Wrapper, List, DetailsList, Item } from "./Features.styled";

export default function Features() {
  const camperData = useOutletContext();

  return (
    <Wrapper>
      <List>
        <Badges path="/icons/automatic.svg" title="Automatic" />
        <Badges path="/icons/wind.svg" title="AC" />
        <Badges path="/icons/petrol.svg" title="Petrol" />
        <Badges path="/icons/cup.svg" title="Kitchen" />
        <Badges path="/icons/radio.svg" title="Radio" />
      </List>

      <h3>Vehicle details</h3>
      <Divider />

      <DetailsList>
        <Item>
          <span>Form</span>
          <span>{camperData.form}</span>
        </Item>
        <Item>
          <span>Length</span>
          <span>{camperData.length}</span>
        </Item>
        <Item>
          <span>Width</span>
          <span>{camperData.width}</span>
        </Item>
        <Item>
          <span>Height</span>
          <span>{camperData.height}</span>
        </Item>
        <Item>
          <span>Tank</span>
          <span>{camperData.tank}</span>
        </Item>
        <Item>
          <span>Consumption</span>
          <span>{camperData.consumption}</span>
        </Item>
      </DetailsList>
    </Wrapper>
  );
}
