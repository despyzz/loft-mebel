import {StateSchema} from "app/providers/StoreProvider";

export const getMainPageProductsError = (state: StateSchema) => {
  return state.mainPageProducts?.error;
}
export const getMainPageProductsHasMore = (state: StateSchema) => {
  return state.mainPageProducts?.hasMore;
}
export const getMainPageProductsIsLoading = (state: StateSchema) => {
  return state.mainPageProducts?.isLoading || false;
}
export const getMainPageProductsLimit = (state: StateSchema) => {
  return state.mainPageProducts?.limit;
}
export const getMainPageProductsPage = (state: StateSchema) => {
  return state.mainPageProducts?.page || 1;
}
