import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { List, ButtonWrapper } from "./CardList.styled";
import { toggleFavorite } from "../../../redux/favoritesSlice";
import { StyledButton } from "../../shared/Button/Button.styled";

export default function CardList({ nextPage }) {
  const { items, total } = useSelector((state) => state.campers);
  const dispatch = useDispatch();
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
        <ButtonWrapper>
          <StyledButton
            $buttonstyle="secondary"
            $width="145px"
            onClick={() => nextPage()}
          >
            Load more
          </StyledButton>
        </ButtonWrapper>
      )}
    </div>
  );
}
