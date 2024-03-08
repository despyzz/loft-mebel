import {StateSchema} from "app/providers/StoreProvider";

export const getProductsData = (state: StateSchema) => {
  return state.products?.data ?? []
}