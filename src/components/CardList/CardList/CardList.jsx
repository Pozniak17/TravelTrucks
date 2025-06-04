import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { Button, List } from "./CardList.styled";

export default function CardList({ nextPage }) {
  const campers = useSelector((state) => state.campers.items);
  console.log(campers);
  return (
    <div>
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
      <Button onClick={() => nextPage()}>Load more</Button>
    </div>
  );
}
