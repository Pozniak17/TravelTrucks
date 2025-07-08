import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCampers, FetchCampersResponse } from "./operations";
import { Camper } from "../types/Card.types";

interface CampersState {
  items: Camper[];
  isLoading: boolean;
  error: string | null;
  total: number;
}

const initialState: CampersState = {
  items: [],
  isLoading: false,
  error: null,
  total: 0,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchCampers.fulfilled,
        (state, action: PayloadAction<FetchCampersResponse>) => {
          state.items = action.payload.items;
          state.total = action.payload.total;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export default campersSlice.reducer;
