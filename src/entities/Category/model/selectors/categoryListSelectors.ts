import {StateSchema} from "app/providers/StoreProvider";

export const getCategoryListIsLoading = (state: StateSchema) => {
  return state.categoryList?.isLoading ?? false;
}

export const getCategoryListError = (state: StateSchema) => {
  return state.categoryList?.error ?? undefined;
}

export const getCategoryListData = (state: StateSchema) => {
  return state.categoryList?.data ?? [];
}