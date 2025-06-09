import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCampersByFilters } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      //! fetchCampers
      .addCase(fetchCampers.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //! fetchCampersByFilters
      .addCase(fetchCampersByFilters.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchCampersByFilters.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampersByFilters.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default campersSlice.reducer;
