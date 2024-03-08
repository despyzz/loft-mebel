import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Product} from "../types/product";
import {fetchProducts} from "../services/fetchProducts";
import {ProductsSchema} from "../types/productsSchema";

const initialState: ProductsSchema = {
  isLoading: true,
  error: undefined,
  data: undefined
}

export const productsSlice = createSlice({
  name: 'product/products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
})

export const {actions: productsActions} = productsSlice
export const {reducer: productsReducer} = productsSlice;