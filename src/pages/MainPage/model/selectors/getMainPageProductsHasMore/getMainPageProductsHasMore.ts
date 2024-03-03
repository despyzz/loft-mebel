import {StateSchema} from "app/providers/StoreProvider";

export const getMainPageProductsHasMore = (state: StateSchema) => {
  return state.mainPageProducts?.hasMore;
}