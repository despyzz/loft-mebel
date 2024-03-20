import {StateSchema} from "app/providers/StoreProvider";
import {createSelector} from "reselect";

export const getWishlistIsLoading = (state: StateSchema) => {
  return state.categoryList?.isLoading ?? false;
}

export const getWishlistError = (state: StateSchema) => {
  return state.categoryList?.error ?? undefined;
}

const getWishlistDataState = (state: StateSchema) => {
  return state.categoryList?.data ?? {};
}

export const getWishlistData = createSelector(
  getWishlistDataState,
  (data) => data
);