import {StateSchema} from "app/providers/StoreProvider";
import {createSelector} from "reselect";

export const getCartIsLoading = (state: StateSchema) => {
  return state.wishlist?.isLoading ?? false;
}

export const getCartError = (state: StateSchema) => {
  return state.wishlist?.error ?? undefined;
}

const getCartDataState = (state: StateSchema) => {
  return state.wishlist?.data
}

export const getCartData = createSelector(
  getCartDataState,
  (data) => data
);