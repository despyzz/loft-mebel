import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Comment} from "entities/Comment";
import { getProductData } from "entities/Product";
import {getUserAuthData} from "entities/User";
import {getCommentFormText} from "../../selectors/getCommentFormText/getCommentFormText";
import {addCommentFormActions} from "../../slices/addCommentFormSlice";

export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
  'addCommentForm/sendComment',
  async (_, thunkAPI) => {
    const {
      extra,
      rejectWithValue,
      getState,
      dispatch
    } = thunkAPI;

    const userData = getUserAuthData(getState());
    const commentBody = getCommentFormText(getState());
    const productData = getProductData(getState());

    if (!userData || !commentBody || !productData) {
      rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        productId: productData!.id,
        body: commentBody,
        userId: userData!.id
      });

      if (!response.data) {
        // noinspection ExceptionCaughtLocallyJS
        throw new Error();
      }

      dispatch(addCommentFormActions.setText(""));

      return response.data

    } catch (e) {
      return rejectWithValue('Failed to load product data');
    }
  }
)
