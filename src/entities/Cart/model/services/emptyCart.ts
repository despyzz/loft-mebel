import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Cart} from "../types/cart";
import {getCartData} from "../selectors/cartSelectors";

export const emptyCart = createAsyncThunk<Cart, string, ThunkConfig<string>>(
  'empty',
  async (userId, thunkAPI) => {
    const {
      extra,
      rejectWithValue,
      dispatch,
      getState
    } = thunkAPI;

    try {
      // const response = await extra.api.get<Cart>(`/cart`, {
      //   params: {
      //     userId,
      //   }
      // });
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

      // @ts-ignore
      return response.data['0']

    } catch (e) {
      return rejectWithValue('Failed to load product data');
    }
  }
)