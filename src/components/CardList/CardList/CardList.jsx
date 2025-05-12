import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import { List } from "./CardList.styled";

export default function CardList() {
  const [campers, setCampers] = useState([]);
  useEffect(() => {
    //   1. Оголошуємо асинхронну функцію
    async function fetchCampers() {
      //   тут виконуємо HTTP-запит
      const response = await axios.get(
        "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
      );
      console.log(response.data.items);
      setCampers(response.data.items);
    }

    //   2. Викликаємо її одну після оголошення
    fetchCampers();
  }, []);

  return (
    <List>
      {campers.map(
        ({
          id,
          name,
          price,
          gallery,
          rating,
          reviews,
          location,
          description,
        }) => (
          <Card
            key={id}
            id={id}
            name={name}
            price={price}
            gallery={gallery}
            rating={rating}
            reviews={reviews}
            location={location}
            description={description}
          />
        )
      )}
    </List>
  );
}
