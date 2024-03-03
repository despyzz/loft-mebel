import {StateSchema} from "app/providers/StoreProvider";

export const getMainPageProductsError = (state: StateSchema) => {
  return state.mainPageProducts?.error;
}