import {StateSchema} from "app/providers/StoreProvider";

export const getProductCommentsIsLoading = (state: StateSchema) => {
  return state.productComments?.isLoading || false;
}