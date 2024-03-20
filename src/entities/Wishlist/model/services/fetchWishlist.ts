import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Wishlist} from "../types/wishlist";

export const fetchWishlist = createAsyncThunk<Wishlist, string, ThunkConfig<string>>(
  'fetchWishlist',
  async (userId, thunkAPI) => {
    const {
      extra,
      rejectWithValue
    } = thunkAPI;

    try {
      const response = await extra.api.get<Wishlist>(`/wishlist`, {
        params: {
          userId,
        }
      });

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