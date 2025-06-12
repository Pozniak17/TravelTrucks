import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    total: 0,
  },
  extraReducers: (builder) => {
    builder
      //! fetchCampers
      .addCase(fetchCampers.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        console.log(state);
        state.error = null;
        state.isLoading = false;
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default campersSlice.reducer;
