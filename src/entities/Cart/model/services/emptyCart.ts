import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getCartData} from "../selectors/cartSelectors";
import {cartActions} from "../slices/cartSlice";

export const emptyCart = createAsyncThunk<void, void, ThunkConfig<string>>(
  'emptyCart',
  async (_, thunkAPI) => {
    const {
      extra,
      getState,
      rejectWithValue,
      dispatch
    } = thunkAPI;

    const cartData = getCartData(getState());

    try {
      if (!cartData)
        return

      void extra.api.patch(`/cart/${cartData.id}`, {
        productsIds: []
      })
      dispatch(cartActions.clear())

    } catch (e) {
      return rejectWithValue('Failed to load product data');
    }
  }
)