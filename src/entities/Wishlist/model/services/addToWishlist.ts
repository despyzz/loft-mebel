import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getWishlistData} from "../selectors/wishlistSelectors";
import {wishlistActions} from "../slices/wishlistSlice";

export const addToWishlist = createAsyncThunk<void, string, ThunkConfig<string>>(
  'addToWishlist',
  async (productId, thunkAPI) => {
    const {
      extra,
      getState,
      rejectWithValue,
      dispatch
    } = thunkAPI;

    const wishlistData = getWishlistData(getState());

    try {
      if (!wishlistData)
        return

      void extra.api.patch(`/wishlist/${wishlistData.id}`, {
        productsIds: [...wishlistData.productsIds, productId]
      })
      dispatch(wishlistActions.add(productId))

    } catch (e) {
      return rejectWithValue('Failed to load product data');
    }
  }
)