import {StateSchema} from "app/providers/StoreProvider";

export const getProductCommentsError = (state: StateSchema) => {
  return state.productComments?.error;
}