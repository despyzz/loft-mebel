import {StateSchema} from "app/providers/StoreProvider";

export const getCommentFormText = (state: StateSchema) => {
  return state.addCommentForm?.text;
}