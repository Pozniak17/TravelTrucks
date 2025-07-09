import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {},
  reducers: {
    setFilter(state, action) {
      return { ...state, ...action.payload };
    },

    clearFilters: () => {
      return {};
    },
  },
});

export const { setFilter, clearFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
