import Card from "../../components/CardList/Card/Card";
import { List } from "../../components/CardList/CardList/CardList.styled";
import { toggleFavorite } from "../../redux/favoritesSlice";
import { Button, EmptyWrapper, Wrapper } from "./Favorites.styled";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useAppDispatch, useAppSelector } from "../../components/utils/hooks";
import { CamperOptions } from "../../types/Card.types";
import Container from "../../components/shared/Container/Container";

export default function Favorites() {
  const favoriteItems = useAppSelector((state) => state.favorites.items);

  const dispatch = useAppDispatch();

  const handleToggleFavorite = (car: CamperOptions) => {
    dispatch(toggleFavorite(car));
  };

  return (
    <Wrapper>
      <Container>
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
          <EmptyWrapper>
            <h1>No Favorites Yet</h1>
            <p>You haven’t added any cars to your favorites.</p>
            <DotLottieReact
              src="https://lottie.host/1bb01189-f87c-493f-8b15-5574fd1bf10f/UnjIOQCkKl.lottie"
              loop
              autoplay
            />
            <p>
              Browse the <Button to="/catalog">Catalog</Button> and tap the
              heart icon to save cars you like.
            </p>
          </EmptyWrapper>
        )}
      </Container>
    </Wrapper>
  );
}
