import {StateSchema} from "app/providers/StoreProvider";

export const getMainPageProductsLimit = (state: StateSchema) => {
  return state.mainPageProducts?.limit;
}