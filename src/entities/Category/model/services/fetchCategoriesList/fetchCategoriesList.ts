import {createAsyncThunk} from "@reduxjs/toolkit";
import {Category} from "../../types/category";
import {ThunkConfig} from "app/providers/StoreProvider";

export const fetchCategoriesList = createAsyncThunk<Array<Category>, void, ThunkConfig<string>>(
  'fetchCategoriesList',
  async (_, thunkAPI) => {
    const {
      extra,
      rejectWithValue
    } = thunkAPI;

    try {
      const response = await extra.api.get<Array<Category>>(`/categories`);
      if (!response.data) {
        // noinspection ExceptionCaughtLocallyJS
        throw new Error();
      }

      return response.data;

    } catch (e) {
      return rejectWithValue('Failed to load product data');
    }
  }
)