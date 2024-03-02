import {createAsyncThunk} from "@reduxjs/toolkit";
import {Comment} from "entities/Comment";
import {ThunkConfig} from "app/providers/StoreProvider";


export const fetchCommentsByProductId = createAsyncThunk<Array<Comment>, string, ThunkConfig<string>>(
  'fetchCommentsByProductId',
  async (productId, thunkAPI) => {
    const {
      extra,
      rejectWithValue
    } = thunkAPI;

    if (!productId) {
      return rejectWithValue('error');
    }

    try {
      const response = await extra.api.get<Array<Comment>>(`/comments`, {
        params: {
          productId,
          _expand: "user"
        }
      });

      if (!response.data) {
        // noinspection ExceptionCaughtLocallyJS
        throw new Error();
      }

      return response.data;

    } catch (e) {
      return rejectWithValue('Failed to load comments');
    }
  }
)