import { Suspense, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import axios from "axios";
import {
  StyledContainer,
  Title,
  Wrapper,
  ReviewsWrapper,
  LocationWrapper,
  PriceTitle,
  ImgList,
  Item,
  Img,
  Description,
  TabList,
  StyledLink,
  Divider,
  DetailsWrapper,
} from "./CamperDetails.styled";
import DetailForm from "../../components/DetailForm/DetailForm";
import { Loader } from "../../components/Loader/Loader";

export default function CamperDetails() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchCamperDetails() {
      const response = await axios.get(
        `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
      );

      setDetails(response.data);
    }

    fetchCamperDetails();
  }, [id]);

  return (
    <StyledContainer>
      <Title>{details.name}</Title>
      <Wrapper>
        <ReviewsWrapper>
          <img src="/icons/star.svg" alt="star icon" />
          <p>{details.rating}(2Reviews)</p>
        </ReviewsWrapper>

        <LocationWrapper>
          <img src="/icons/map2.svg" alt="map icon" />
          <p>{details.location}</p>
        </LocationWrapper>
      </Wrapper>

      <PriceTitle>€{details.price}</PriceTitle>

      <ImgList>
        {details?.gallery?.map((image) => (
          <Item key={image.original}>
            <Img src={image.original} alt="Camper photo" />
          </Item>
        ))}
      </ImgList>

      <Description>{details.description}</Description>

      <div>
        <TabList>
          <li>
            <StyledLink to="features">Features</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </TabList>
        <Divider />

        <Suspense fallback={<Loader />} />
        <DetailsWrapper>
          <Outlet context={details} />
          <DetailForm />
        </DetailsWrapper>
      </div>
    </StyledContainer>
  );
}

// 1. іконки взяти одні й ті, задати width
