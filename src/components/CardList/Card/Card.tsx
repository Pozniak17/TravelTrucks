import Badges from "../../shared/Badges/Badges";
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
  BadgesList,
} from "./Card.styled";

import Wind from "/icons/wind.svg";
import Automatic from "/icons/automatic.svg";
import Petrol from "/icons/petrol.svg";
import Cup from "/icons/cup.svg";
import { StyledLink } from "../../shared/Button/Button.styled";
import { CardProps } from "../../../types/Card.types";

export default function Card({
  id,
  name,
  price,
  gallery,
  rating,
  reviews,
  location,
  description,
  isFavorite,
  onToggleFavorite,
}: CardProps) {
  return (
    <CardWrapper>
      <Img src={gallery[0].thumb} alt="camper picture" />

      <InfoWrapper>
        <TitleWrapper>
          <Title>{name}</Title>

          <IconWrapper>
            <Title>€{price}.00</Title>
            {isFavorite ? (
              <img
                src="/icons/heart-red.svg"
                alt="heart icon"
                onClick={onToggleFavorite}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <img
                src="/icons/heart.svg"
                alt="heart icon"
                onClick={onToggleFavorite}
                style={{ cursor: "pointer" }}
              />
            )}
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

        <SupportText>{description.slice(0, 60)}...</SupportText>
        <BadgesList>
          <Badges path={Automatic} title="Automatic" />
          <Badges path={Petrol} title="Petrol" />
          <Badges path={Cup} title="Kitchen" />
          <Badges path={Wind} title="AC" />
        </BadgesList>

        <StyledLink $width="166px" to={`/catalog/${id}/features`}>
          Show more
        </StyledLink>
      </InfoWrapper>
    </CardWrapper>
  );
}
