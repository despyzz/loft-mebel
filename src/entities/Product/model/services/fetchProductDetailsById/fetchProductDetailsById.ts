import {createAsyncThunk} from "@reduxjs/toolkit";
import {Product} from "../../types/product";
import {ThunkConfig} from "app/providers/StoreProvider";

export const fetchProductDetailsById = createAsyncThunk<Product, string, ThunkConfig<string>>(
  'fetchProductDetailsById',
  async (productId, thunkAPI) => {
    const {
      extra,
      rejectWithValue
    } = thunkAPI;

    try {
      const response = await extra.api.get<Product>(`/products/${productId}`);

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