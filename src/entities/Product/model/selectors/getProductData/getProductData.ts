import {StateSchema} from "app/providers/StoreProvider";

export const getProductData = (state: StateSchema) => {
  return state.productDetails?.data || undefined;
}