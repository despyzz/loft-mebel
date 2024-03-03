import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {Product} from "entities/Product";
import {StateSchema} from "app/providers/StoreProvider";
import {ProductListSchema} from "../types/productListSchema";

const productAdapter = createEntityAdapter({
  selectId: (product: Product) => product.id,
})

export const getProductComments = productAdapter.getSelectors<StateSchema>(
  state => state.productList || productAdapter.getInitialState()
)

export const productListSlice = createSlice({
  name: 'product/productList',
  initialState: productAdapter.getInitialState<ProductListSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
})

export const {actions: productListActions} = productListSlice
export const {reducer: productListReducer} = productListSlice;