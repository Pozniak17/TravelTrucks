// import { useState } from "react";
// import axios from "axios";
import Card from "../Card/Card";
import { List } from "./CardList.styled";

export default function CardList({ items }) {
  return (
    <List>
      {items.map(
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
