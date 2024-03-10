import {StateSchema} from "app/providers/StoreProvider";

export const getProductsPage = (state: StateSchema) => {
  return state.products?.page || 1;
}

export const getProductsLimit = (state: StateSchema) => {
  return state.products?.limit;
}

export const getProductsHasMore = (state: StateSchema) => {
  return state.products?.hasMore;
}

export const getProductsError = (state: StateSchema) => {
  return state.products?.error;
}

export const getProductsIsLoading = (state: StateSchema) => {
  return state.products?.isLoading || false;
}