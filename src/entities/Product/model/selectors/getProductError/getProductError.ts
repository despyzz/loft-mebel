import {StateSchema} from "app/providers/StoreProvider";

export const getProductError = (state: StateSchema) => {
  return state.productDetails?.error || undefined;
}