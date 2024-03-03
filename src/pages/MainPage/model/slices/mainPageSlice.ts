import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MainPageSchema} from "../types/mainPage";
import {Product} from "entities/Product";
import {StateSchema} from "app/providers/StoreProvider";
import {fetchMainPageProducts} from "../services/fetchMainPageProducts/fetchMainPageProducts";

const mainPageProductsAdapter = createEntityAdapter({
  selectId: (product: Product) => product.id
});

export const getMainPageProducts = mainPageProductsAdapter.getSelectors(
  (state: StateSchema) => state.mainPageProducts || mainPageProductsAdapter.getInitialState(),
)

export const mainPageSlice = createSlice({
  name: 'product/productDetails',
  initialState: mainPageProductsAdapter.getInitialState<MainPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},

    page: 1,
    limit: 6,
    hasMore: true
  }),
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMainPageProducts.pending, (state) => {
        state.isLoading = true;
        state.error = undefined
      })
      .addCase(fetchMainPageProducts.fulfilled, (state, action) => {
        state.isLoading = false
        mainPageProductsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchMainPageProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
})

export const {actions: mainPageActions} = mainPageSlice
export const {reducer: mainPageReducer} = mainPageSlice;