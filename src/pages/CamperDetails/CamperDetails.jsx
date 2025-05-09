import { useParams } from "react-router-dom";
import Container from "../../components/shared/Container/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { Title, ReviewsWrapper } from "./CamperDetails.styled";

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
    <Container>
      <Title>{details.name}</Title>
      <div>
        <ReviewsWrapper>
          <img src="/public/icons/star.svg" alt="star icon" />
          <p>{details.rating}(2Reviews)</p>
        </ReviewsWrapper>

        <div>
          <div>
            <img src="/public/icons/map2.svg" alt="map icon" />
            <p>{details.location}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
