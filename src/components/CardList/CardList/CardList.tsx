import Card from "../Card/Card";
import { List, ButtonWrapper } from "./CardList.styled";
import { toggleFavorite } from "../../../redux/favoritesSlice";
import { CamperOptions, CardListProps } from "../../../types/Card.types";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { RootState } from "../../../redux/store";
import Button from "../../shared/Button/Button";

export default function CardList({ nextPage }: CardListProps) {
  const dispatch = useAppDispatch();
  const { items, total } = useAppSelector((state: RootState) => state.campers);
  const favorites = useAppSelector((state: RootState) => state.favorites.items);

  const handleToggleFavorite = (car: CamperOptions) => {
    dispatch(toggleFavorite(car));
  };

  return (
    <div>
      <List>
        {Array.isArray(items) &&
          items.map((car: CamperOptions) => (
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
          <Button
            buttonstyle="secondary"
            width="145px"
            onClick={() => nextPage()}
          >
            Load more
          </Button>
        </ButtonWrapper>
      )}
    </div>
  );
}
