import {StateSchema} from "app/providers/StoreProvider";

export const getFilterIsLoading = (state: StateSchema) => {
  return state.filter?.isLoading
}

export const getFilterError = (state: StateSchema) => {
  return state.filter?.error ?? undefined
}

export const getFilterData = (state: StateSchema) => {
  return state.filter?.data ?? undefined
}

export const getFilterPrice = (state: StateSchema) => {
  return state.filter?.data.price ?? {
    start: 0,
    end: 100000
  }
}

export const getFilterCategory = (state: StateSchema) => {
  return state.filter?.data.category ?? undefined
}


