import {StateSchema} from "app/providers/StoreProvider";
import {createSelector} from "reselect";

const getProductsDataState = (state: StateSchema) => {
  return state.products?.data ?? []
}

export const getProductsData = createSelector(
  getProductsDataState,
  (data) => data
);
