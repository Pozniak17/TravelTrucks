import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// Симулюємо затримку
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

      await delay(500); // затримка

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
