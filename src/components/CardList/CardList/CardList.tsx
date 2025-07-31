import Card from "../Card/Card";
import { List, ButtonWrapper } from "./CardList.styled";
import { toggleFavorite } from "../../../redux/favoritesSlice";
import { CamperOptions } from "../../../types/Card.types";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { RootState } from "../../../redux/store";
import Button from "../../shared/Button/Button";
import SortPanel from "../../SortPanel/SortPanel";
import { Loader } from "../../Loader/Loader";

interface Props {
  nextPage: () => void;
  value: string;
  sortedCampers: any;
  onChange: (value: string) => void;
  isSorting: any;
}

export default function CardList({
  nextPage,
  sortedCampers,
  value,
  onChange,
  isSorting,
}: Props) {
  const dispatch = useAppDispatch();
  const { items, total } = useAppSelector((state: RootState) => state.campers);
  const favorites = useAppSelector((state: RootState) => state.favorites.items);

  const handleToggleFavorite = (car: CamperOptions) => {
    dispatch(toggleFavorite(car));
  };

  return (
    <div>
      <SortPanel value={value} onChange={onChange} />
      <List>
        {Array.isArray(items) &&
          sortedCampers.map((car: CamperOptions) => (
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
