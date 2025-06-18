import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/CardList/Card/Card";
import { List } from "../../components/CardList/CardList/CardList.styled";
import { toggleFavorite } from "../../redux/favoritesSlice";
import FilterForm from "../../components/FilterForm/FilterForm";
import Container from "../../components/shared/Container/Container";

export default function Favorites() {
  const favoriteItems = useSelector((state) => state.favorites.items);

  const dispatch = useDispatch();

  const handleToggleFavorite = (car) => {
    dispatch(toggleFavorite(car));
  };
  return (
    <Container>
      <FilterForm />
      <List>
        {favoriteItems.map((car) => (
          <Card
            key={car.id}
            {...car}
            isFavorite={favoriteItems.some((fav) => fav.id === car.id)}
            onToggleFavorite={() => handleToggleFavorite(car)}
          />
        ))}
      </List>

      {/* {favoriteItems.length < total && (
        <Button onClick={() => nextPage()}>Load more</Button>
      )} */}
    </Container>
  );
}
