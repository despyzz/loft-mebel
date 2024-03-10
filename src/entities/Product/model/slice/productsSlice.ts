import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Product} from "../types/product";
import {fetchProducts} from "../services/fetchProducts";
import {ProductsSchema} from "../types/productsSchema";
import {StateSchema} from "app/providers/StoreProvider";

const productsAdapter = createEntityAdapter({
  selectId: (product: Product) => product.id
})

export const getProducts = productsAdapter.getSelectors(
  (state: StateSchema) => state.products || productsAdapter.getInitialState(),
)

export const productsSlice = createSlice({
  name: 'product/products',
  initialState: productsAdapter.getInitialState<ProductsSchema>({
    isLoading: true,
    error: undefined,
    ids: [],
    entities: {},

    // pagination
    page: 1,
    limit: 6,
    hasMore: true
  }),
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;

        if (action.meta.arg.replace) {
          productsAdapter.removeAll(state);
        }
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length > 0;

        if (action.meta.arg.replace) {
          productsAdapter.setAll(state, action.payload);
        } else {
          productsAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
})

export const {actions: productsActions} = productsSlice
export const {reducer: productsReducer} = productsSlice;