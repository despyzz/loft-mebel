import {StateSchema} from "app/providers/StoreProvider";
import {createSelector} from "reselect";

export const getCategoryListIsLoading = (state: StateSchema) => {
  return state.categoryList?.isLoading ?? false;
}

export const getCategoryListError = (state: StateSchema) => {
  return state.categoryList?.error ?? undefined;
}

const getCategoryListDataState = (state: StateSchema) => {
  return state.categoryList?.data ?? [];
}

export const getCategoryListData = createSelector(
  getCategoryListDataState,
  (data) => data
);