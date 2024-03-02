import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getUserAuthData} from "entities/User";
import {getProductData} from "entities/Product";
import {getCommentFormText} from "feautures/AddCommentForm";
import {addCommentFormActions} from "feautures/AddCommentForm/model/slices/addCommentFormSlice";
import {fetchCommentsByProductId} from "../fetchCommentsByProductId/fetchCommentsByProductId";

export const addCommentForProduct = createAsyncThunk<Comment, void, ThunkConfig<string>>(
  'productPage/addCommentForProduct',
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
      dispatch(fetchCommentsByProductId(productData!.id));

      return response.data

    } catch (e) {
      return rejectWithValue('Failed to load product data');
    }
  }
)
