import {StateSchema} from "app/providers/StoreProvider";
import {createSelector} from "reselect";

export const getFilterIsLoading = (state: StateSchema) => {
  return state.filter?.isLoading
}

export const getFilterError = (state: StateSchema) => {
  return state.filter?.error ?? undefined
}

export const getFilterData = (state: StateSchema) => {
  return state.filter?.data ?? undefined
}

const getFilterPriceState = (state: StateSchema) => {
  return state.filter?.data.price ?? {
    start: 0,
    end: 100000
  }
}

export const getFilterPrice = createSelector(
  getFilterPriceState,
  (data) => data
);


export const getFilterCategory = (state: StateSchema) => {
  return state.filter?.data.category ?? undefined
}


