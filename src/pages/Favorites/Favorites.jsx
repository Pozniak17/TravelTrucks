import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/CardList/Card/Card";
import { List } from "../../components/CardList/CardList/CardList.styled";
import { toggleFavorite } from "../../redux/favoritesSlice";
import { Button, Wrapper } from "./Favorites.styled";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Favorites() {
  const favoriteItems = useSelector((state) => state.favorites.items);

  const dispatch = useDispatch();

  const handleToggleFavorite = (car) => {
    dispatch(toggleFavorite(car));
  };

  return (
    <Wrapper>
      {favoriteItems.length ? (
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
      ) : (
        <div>
          <h1>No Favorites Yet</h1>
          <p>You haven’t added any cars to your favorites.</p>
          <DotLottieReact
            src="https://lottie.host/1bb01189-f87c-493f-8b15-5574fd1bf10f/UnjIOQCkKl.lottie"
            loop
            autoplay
            style={{ width: "672px", height: "336px" }}
          />
          <p>
            Browse the <Button to="/catalog">Catalog</Button> and tap the heart
            icon to save cars you like.
          </p>
        </div>
      )}
    </Wrapper>
  );
}
