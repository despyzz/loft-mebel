import {StateSchema} from "app/providers/StoreProvider";
import {SortTypes} from "../types/sort";

export const getSortTypes = (state: StateSchema) => {
  return state?.sort?.data.type || SortTypes.popularity
}