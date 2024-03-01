import {createAsyncThunk} from "@reduxjs/toolkit";
import {Product} from "../../types/product";
import {ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";


export const fetchProductDetailsById = createAsyncThunk<Product, string, ThunkConfig<string>>(
  'productDetails/fetchProductDetailsById',
  async (productId, thunkAPI) => {
    const {
      _,
      rejectWithValue
    } = thunkAPI;

    try {
      // const response = await extra.api.get<Product>(`/products/${productId}`);
      const response = await axios.get<Product>(`http://localhost:8000/products/${productId}`);

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