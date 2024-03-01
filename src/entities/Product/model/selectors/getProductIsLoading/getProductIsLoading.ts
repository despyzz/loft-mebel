import {StateSchema} from "app/providers/StoreProvider";

export const getProductIsLoading = (state: StateSchema) => {
  return state.productDetails?.isLoading;
}