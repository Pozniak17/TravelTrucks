import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CamperOptions } from "../types/Card.types";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// Тип аргументу
interface FetchCampersArgs {
  limit: number;
  filters?: Record<string, string | boolean>;
}

// Тип повернення
export interface FetchCampersResponse {
  items: CamperOptions[];
  total: number;
}

// Симулюємо затримку
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchCampers = createAsyncThunk<
  FetchCampersResponse, // тип, який реально повертається (тобто response.data)
  FetchCampersArgs,
  { rejectValue: string }
>("campers/fetchCampers", async (data, thunkAPI) => {
  try {
    const response = await axios.get<FetchCampersResponse>("/campers", {
      params: {
        page: 1,
        limit: data.limit,
        ...data.filters,
      },
    });

    await delay(500);

    return response.data; // повертаємо без додаткових обгорток
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
