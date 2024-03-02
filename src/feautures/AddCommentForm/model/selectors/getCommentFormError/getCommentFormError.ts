import {StateSchema} from "app/providers/StoreProvider";

export const getCommentFormError = (state: StateSchema) => {
  return state.addCommentForm?.error;
}