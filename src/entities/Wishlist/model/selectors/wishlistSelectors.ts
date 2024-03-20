import {StateSchema} from "app/providers/StoreProvider";
import {createSelector} from "reselect";

export const getWishlistIsLoading = (state: StateSchema) => {
  return state.wishlist?.isLoading ?? false;
}

export const getWishlistError = (state: StateSchema) => {
  return state.wishlist?.error ?? undefined;
}

const getWishlistDataState = (state: StateSchema) => {
  return state.wishlist?.data
}

export const getWishlistData = createSelector(
  getWishlistDataState,
  (data) => data
);