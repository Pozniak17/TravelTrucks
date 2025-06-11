import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Встановлюємо базову URL-адресу
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (data, thunkAPI) => {
    const { limit } = data;

    try {
      const response = await axios.get("/campers", {
        params: {
          page: 1,
          limit,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCampersByFilters = createAsyncThunk(
  "campers/fetchCampersByFilters",
  async (data, thunkAPI) => {
    const { limit, location, filters } = data;
    console.log(filters);
    try {
      const response = await axios.get("/campers", {
        params: {
          page: 1,
          limit,
          location,
          filters,
        },
      });

      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
