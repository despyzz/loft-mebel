import {Cart, CartSchema} from "../types/cart";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { fetchCart } from "../services/fetchCart";

const initialState: CartSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
}

export const cartSlice = createSlice({
  name: 'cart',
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
    },
    clear: (state) => {
      if (state.data)
        state.data.productsIds = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchCart.fulfilled, (state, action: PayloadAction<Cart>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
})

export const {actions: cartActions} = cartSlice
export const {reducer: cartReducer} = cartSlice;