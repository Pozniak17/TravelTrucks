import {
  CardWrapper,
  Img,
  TitleWrapper,
  Title,
  IconWrapper,
  DetailsWrapper,
  Wrapper,
  Text,
  SupportText,
  InfoWrapper,
} from "./Card.styled";

export default function Card({
  name,
  price,
  gallery,
  rating,
  reviews,
  location,
  description,
}) {
  // console.log(data);
  return (
    <CardWrapper>
      <Img src={gallery[0].thumb} alt="camper picture" />

      <InfoWrapper>
        <TitleWrapper>
          <Title>{name}</Title>

          <IconWrapper>
            <Title>€{price}.00</Title>
            <img src="/icons/heart.svg" alt="heart icon" />
          </IconWrapper>
        </TitleWrapper>

        <DetailsWrapper>
          <Wrapper>
            <img src="/icons/star.svg" alt="star icon" />
            <Text>
              {rating}({reviews.length} Reviews)
            </Text>
          </Wrapper>

          <Wrapper>
            <img src="/icons/map2.svg" alt="map icon" />
            <Text>{location}</Text>
          </Wrapper>
        </DetailsWrapper>

        <SupportText>{description.slice(0, 65)}...</SupportText>
      </InfoWrapper>
    </CardWrapper>
  );
}
