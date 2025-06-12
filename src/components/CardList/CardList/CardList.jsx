import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { Button, List } from "./CardList.styled";

export default function CardList({ nextPage }) {
  const { items, total } = useSelector((state) => state.campers);

  // console.log("items:", campers.length);
  // console.log("total:", total);

  return (
    <div>
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

      {items.length < total && (
        <Button onClick={() => nextPage()}>Load more</Button>
      )}
    </div>
  );
}
