import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CamperOptions } from "../types/Card.types";

interface FavoriteState {
  items: CamperOptions[];
}

const initialState: FavoriteState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<CamperOptions>) => {
      console.log(action.payload);
      const exist = state.items.find((item) => item.id === action.payload.id);
      if (exist) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
