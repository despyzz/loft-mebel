import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { fetchProductDetailsById } from '../services/fetchProductDetailsById/fetchProductDetailsById';
import {ProductDetailsSchema} from '../types/productDetailsSchema';
import {Product} from "../types/product";

const initialState: ProductDetailsSchema = {
  isLoading: true,
  error: undefined,
  data: undefined
}

export const productDetailsSlice = createSlice({
  name: 'product/productDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetailsById.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchProductDetailsById.fulfilled, (state, action: PayloadAction<Product>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductDetailsById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
})

export const {actions: productDetailsActions} = productDetailsSlice
export const {reducer: productDetailsReducer} = productDetailsSlice;