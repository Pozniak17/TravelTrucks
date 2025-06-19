import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/CardList/Card/Card";
import { List } from "../../components/CardList/CardList/CardList.styled";
import { toggleFavorite } from "../../redux/favoritesSlice";
import { Button, Wrapper } from "./Favorites.styled";
// import { Link } from "react-router-dom";
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
            src="https://lottie.host/d400fd10-c4b5-4d59-b3d7-6184c4cad222/E0Aqmxkg85.lottie"
            loop
            autoplay
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
