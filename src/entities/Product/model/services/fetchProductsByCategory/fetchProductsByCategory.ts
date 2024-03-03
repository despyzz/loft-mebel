import {createAsyncThunk} from "@reduxjs/toolkit";
import {Product} from "../../types/product";
import {ThunkConfig} from "app/providers/StoreProvider";

export const fetchProductsByCategory = createAsyncThunk<Product[], string, ThunkConfig<string>>(
  'fetchProductsByCategory',
  async (categoryId, thunkAPI) => {
    const {
      extra,
      rejectWithValue
    } = thunkAPI;

    try {
      const response = await extra.api.get<Product[]>(`/products/${categoryId}`);

      if (!response.data) {
        // noinspection ExceptionCaughtLocallyJS
        throw new Error();
      }

      return response.data;

    } catch (e) {
      return rejectWithValue('Failed to load product data');
    }
  }
)