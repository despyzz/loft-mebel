import {StateSchema} from "app/providers/StoreProvider";
import {createSelector} from "reselect";

export const getCartIsLoading = (state: StateSchema) => {
  return state.cart?.isLoading ?? false;
}

export const getCartError = (state: StateSchema) => {
  return state.cart?.error ?? undefined;
}

const getCartDataState = (state: StateSchema) => {
  return state.cart?.data
}

export const getCartData = createSelector(
  getCartDataState,
  (data) => data
);