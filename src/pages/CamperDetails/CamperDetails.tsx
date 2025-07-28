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
  Description,
  TabList,
  StyledLink,
  Divider,
  DetailsWrapper,
  MainContainer,
  StyledWrapper,
  InfoBlock,
  TitleBlock,
  WrapperBox,
  Item,
} from "./CamperDetails.styled";
import DetailForm from "../../components/DetailForm/DetailForm";
import { Loader } from "../../components/Loader/Loader";
import { CamperOptions } from "../../types/Card.types";
import CarsSlider from "../../components/shared/Slider/Slider";

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
        <div>
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
              <Item>
                <CarsSlider
                  images={details.gallery?.map((item) => item.original)}
                  onImageClick={(index) => {
                    setCurrentIndex(index);
                    setOpen(true);
                  }}
                />
              </Item>
            </ImgList>

            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={slides}
              index={currentIndex}
            />

            <Description>{details.description}</Description>

            <TabList>
              <li>
                <StyledLink to="features">Features</StyledLink>
              </li>
              <li>
                <StyledLink to="reviews">Reviews</StyledLink>
              </li>
            </TabList>

            <Divider />

            <WrapperBox>
              <Suspense fallback={<Loader />} />
              <Outlet context={details} />

              <DetailForm />
            </WrapperBox>
          </StyledWrapper>
        </div>
      </MainContainer>
    </>
  );
}

// 1. іконки взяти одні й ті, задати width

//  {details?.gallery?.map((image, index) => (
//   <Item
//     key={image.original}
//     onClick={() => {
//       setCurrentIndex(index);
//       setOpen(true);
//     }}
//   >
//     <CarsSlider>
//       <div>
//         <img src={details.gallery.origi} />
//       </div>
//     </CarsSlider>
//     {/*    // <Img src={image.original} alt="Camper photo" /> */}
//   </Item>
// ))}
