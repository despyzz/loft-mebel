import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductCommentsSchema} from "../types/productComments";
import {Comment} from "entities/Comment";
import {StateSchema} from "app/providers/StoreProvider";
import {fetchCommentsByProductId} from "../services/fetchCommentsByProductId/fetchCommentsByProductId";

const commentsAdapter = createEntityAdapter({
  selectId: (comment: Comment) => comment.id,
})

export const getProductComments = commentsAdapter.getSelectors<StateSchema>(
  state => state.productComments || commentsAdapter.getInitialState()
)

export const productCommentsSlice = createSlice({
  name: 'productCommentsSlice',
  initialState: commentsAdapter.getInitialState<ProductCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByProductId.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchCommentsByProductId.fulfilled, (state, action: PayloadAction<Array<Comment>>) => {
        state.isLoading = false
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByProductId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
})

export const {actions: productCommentsActions} = productCommentsSlice
export const {reducer: productCommentsReducer} = productCommentsSlice;