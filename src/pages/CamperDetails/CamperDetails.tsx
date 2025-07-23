import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { SlideImage } from "yet-another-react-lightbox";
import { Suspense, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import axios from "axios";
import {
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
  MainContainer,
  StyledWrapper,
  InfoBlock,
  TitleBlock,
} from "./CamperDetails.styled";
import DetailForm from "../../components/DetailForm/DetailForm";
import { Loader } from "../../components/Loader/Loader";
import { CamperOptions } from "../../types/Card.types";

export default function CamperDetails() {
  const [details, setDetails] = useState<CamperOptions | null>(null);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(details);
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

  if (!details) {
    return <Loader />;
  }

  const slides: SlideImage[] = details.gallery.map((img) => ({
    src: img.original,
  }));

  return (
    <>
      <MainContainer>
        <StyledWrapper>
          <TitleBlock>
            <Title>{details.name}</Title>
            <InfoBlock>
              <PriceTitle>€{details.price}</PriceTitle>
              <img src="/icons/heart.svg" />
            </InfoBlock>
          </TitleBlock>
          <Wrapper>
            <ReviewsWrapper>
              <img src="/icons/star.svg" alt="star icon" />
              <p>{details.rating}(2 Reviews)</p>
            </ReviewsWrapper>

            <LocationWrapper>
              <img src="/icons/map2.svg" alt="map icon" />
              <p>{details.location}</p>
            </LocationWrapper>
          </Wrapper>
          <ImgList>
            {details?.gallery?.map((image, index) => (
              <Item
                key={image.original}
                onClick={() => {
                  setCurrentIndex(index);
                  setOpen(true);
                }}
              >
                <Img src={image.original} alt="Camper photo" />
              </Item>
            ))}
          </ImgList>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            index={currentIndex}
          />
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
            </DetailsWrapper>
          </div>
        </StyledWrapper>
        <DetailForm />
      </MainContainer>
    </>
  );
}

// 1. іконки взяти одні й ті, задати width
