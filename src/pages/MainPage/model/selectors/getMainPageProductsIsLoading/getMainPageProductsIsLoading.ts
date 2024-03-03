import {StateSchema} from "app/providers/StoreProvider";

export const getMainPageProductsIsLoading = (state: StateSchema) => {
  return state.mainPageProducts?.isLoading;
}