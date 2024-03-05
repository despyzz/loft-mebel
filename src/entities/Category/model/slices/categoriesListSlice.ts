import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Category, CategoryListSchema} from "../types/category";
import {fetchCategoriesList} from "../services/fetchCategoriesList/fetchCategoriesList";

const initialState: CategoryListSchema = {
  isLoading: false,
  error: undefined,
  data: []
}

export const categoriesListSlice = createSlice({
  name: 'category/categoriesList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesList.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchCategoriesList.fulfilled, (state, action: PayloadAction<Array<Category>>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCategoriesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
})

export const {actions: categoriesListActions} = categoriesListSlice
export const {reducer: categoriesListReducer} = categoriesListSlice;