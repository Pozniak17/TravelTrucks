import Badges from "../../shared/Badges/Badges";
import {
  CardWrapper,
  Img,
  TitleWrapper,
  Title,
  IconWrapper,
  DetailsWrapper,
  Wrapper,
  SupportText,
  InfoWrapper,
  BadgesList,
  TextFirst,
  TextLast,
} from "./Card.styled";

import Wind from "/icons/wind.svg";
import Automatic from "/icons/automatic.svg";
import Petrol from "/icons/petrol.svg";
import Cup from "/icons/cup.svg";
import { CardProps } from "../../../types/Card.types";
import { StyledLink } from "../../shared/Button/Button.styled";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
            <TextFirst onClick={() => navigate(`/catalog/${id}/reviews`)}>
              {rating}({reviews.length} Reviews)
            </TextFirst>
          </Wrapper>

          <Wrapper>
            <img src="/icons/map2.svg" alt="map icon" />
            <TextLast>{location}</TextLast>
          </Wrapper>
        </DetailsWrapper>

        <SupportText>{description.slice(0, 60)}...</SupportText>
        <BadgesList>
          <Badges path={Automatic} title="Automatic" />
          <Badges path={Petrol} title="Petrol" />
          <Badges path={Cup} title="Kitchen" />
          <Badges path={Wind} title="AC" />
        </BadgesList>

        <StyledLink to={`/catalog/${id}`} $width="100%">
          Show more
        </StyledLink>
      </InfoWrapper>
    </CardWrapper>
  );
}
