import {StateSchema} from "app/providers/StoreProvider";

export const getMainPageProductsPage = (state: StateSchema) => {
  return state.mainPageProducts?.page;
}