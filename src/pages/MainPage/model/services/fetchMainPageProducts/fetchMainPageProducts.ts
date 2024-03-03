import {createAsyncThunk} from "@reduxjs/toolkit";
import {Product} from "entities/Product";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getMainPageProductsLimit} from "../../selectors/getMainPageProductsLimit/getMainPageProductsLimit";

interface FetchMainPageProductsProps {
  page?: number
}

export const fetchMainPageProducts = createAsyncThunk<Product[], FetchMainPageProductsProps, ThunkConfig<string>>(
  'fetchMainPageProducts',
  async (props, thunkAPI) => {
    const {
      extra,
      rejectWithValue,
      getState
    } = thunkAPI;

    const {
      page = 1
    } = props;
    const limit = getMainPageProductsLimit(getState())

    try {
      const response = await extra.api.get<Product[]>(`/products`, {
        params: {
          _expand: "category",
          _limit: limit,
          _page: page,
        }
      });

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