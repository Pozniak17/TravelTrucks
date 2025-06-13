import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { Button, List } from "./CardList.styled";
import { toggleFavorite } from "../../../redux/favoritesSlice";

export default function CardList({ nextPage }) {
  const { items, total } = useSelector((state) => state.campers);
  const dispatch = useDispatch();

  // console.log("items:", campers.length);
  // console.log("total:", total);
  const favorites = useSelector((state) => state.favorites.items);

  const handleToggleFavorite = (car) => {
    dispatch(toggleFavorite(car));
  };

  return (
    <div>
      <List>
        {items.map((car) => (
          <Card
            key={car.id}
            {...car}
            isFavorite={favorites.some((fav) => fav.id === car.id)}
            onToggleFavorite={() => handleToggleFavorite(car)}
          />
        ))}
      </List>

      {items.length < total && (
        <Button onClick={() => nextPage()}>Load more</Button>
      )}
    </div>
  );
}
