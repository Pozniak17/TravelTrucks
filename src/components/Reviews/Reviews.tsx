import { useOutletContext } from "react-router-dom";
import {
  Block,
  Circle,
  Item,
  NameWrapper,
  PersonWrapper,
  Text,
  Wrapper,
} from "./Reviews.styled";
import Stars from "../shared/Stars/Stars";
import { CamperOptions } from "../../types/Card.types";

export default function Reviews() {
  const details = useOutletContext<CamperOptions>();

  return (
    <Wrapper>
      <Block>
        {details.reviews?.map((feedback, index) => (
          <Item key={index}>
            <PersonWrapper>
              <Circle>
                <span>{feedback.reviewer_name.slice(0, 1)}</span>
              </Circle>
              <NameWrapper>
                <p>{feedback.reviewer_name}</p>
                {Stars(feedback.reviewer_rating)}
              </NameWrapper>
            </PersonWrapper>
            <Text>{feedback.comment}</Text>
          </Item>
        ))}
      </Block>
    </Wrapper>
  );
}
