import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getCartData} from "../selectors/cartSelectors";
import {cartActions} from "../slices/cartSlice";

export const addToCart = createAsyncThunk<void, string, ThunkConfig<string>>(
  'addToCart',
  async (productId, thunkAPI) => {
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
        productsIds: [...cartData.productsIds, productId]
      })
      dispatch(cartActions.add(productId))

    } catch (e) {
      return rejectWithValue('Failed to load product data');
    }
  }
)