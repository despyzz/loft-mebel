import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Cart} from "../types/cart";

export const fetchCart = createAsyncThunk<Cart, string, ThunkConfig<string>>(
  'fetchCart',
  async (userId, thunkAPI) => {
    const {
      extra,
      rejectWithValue
    } = thunkAPI;

    try {
      const response = await extra.api.get<Cart>(`/cart`, {
        params: {
          userId,
        }
      });

      if (!response.data) {
        // noinspection ExceptionCaughtLocallyJS
        throw new Error();
      }

      // @ts-ignore
      return response.data['0']

    } catch (e) {
      return rejectWithValue('Failed to load product data');
    }
  }
)