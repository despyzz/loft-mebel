import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Cart} from "../types/cart";
import {getCartData} from "../selectors/cartSelectors";

export const emptyCart = createAsyncThunk<void, string, ThunkConfig<string>>(
  'empty',
  async (userId, thunkAPI) => {
    const {
      extra,
      rejectWithValue,
      getState
    } = thunkAPI;

    try {
      const currentCart = getCartData(getState())

      const response = await extra.api.put<Cart>('/cart', {
        id: currentCart,
        userId,
        productsIds: []
      });

      if (!response.data) {
        // noinspection ExceptionCaughtLocallyJS
        throw new Error();
      }

    } catch (e) {
      return rejectWithValue('Failed to load product data');
    }
  }
)