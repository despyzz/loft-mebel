import {Wishlist, WishlistSchema} from "../types/wishlist";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { fetchWishlist } from "../services/fetchWishlist";

const initialState: WishlistSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      if (state.data)
        state.data.productsIds.push(action.payload)
    },
    remove: (state, action: PayloadAction<string>) => {
      if (state.data)
        state.data.productsIds = state.data.productsIds.filter(
          item => item !== action.payload
        )
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchWishlist.fulfilled, (state, action: PayloadAction<Wishlist>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
})

export const {actions: wishlistActions} = wishlistSlice
export const {reducer: wishlistReducer} = wishlistSlice;