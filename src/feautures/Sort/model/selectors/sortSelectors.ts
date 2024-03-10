import {StateSchema} from "app/providers/StoreProvider";

export const getSortTypes = (state: StateSchema) => {
  return state.sort?.data?.type;
}