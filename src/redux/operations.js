import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Встановлюємо базову URL-адресу
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (data, thunkAPI) => {
    const { limit, filters } = data;
    console.log(filters);
    try {
      const response = await axios.get("/campers", {
        params: {
          page: 1,
          limit,
          ...filters,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
