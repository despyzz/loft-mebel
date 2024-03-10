import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Category} from "entities/Category";
import {Product} from "../types/product";
import {SortTypes} from "feautures/Sort/model/types/sort";
import {getProductsLimit} from "../selectors/productsSelectors";

interface fetchProductsProps {
  category?: Category
  sortType?: SortTypes
  priceStart?: number
  priceEnd?: number
  page?: number
  search?: string
  replace?: boolean
}

export const fetchProducts = createAsyncThunk<Array<Product>, fetchProductsProps, ThunkConfig<string>>(
  'fetchProducts',
  async (props, thunkAPI) => {
    const {
      extra,
      rejectWithValue,
      getState
    } = thunkAPI;

    const {
      category,
      sortType,
      priceStart,
      priceEnd,
      page = 1,
      search,
    } = props;
    const limit = getProductsLimit(getState())

    try {
      const response = await extra.api.get<Array<Product>>('/products', {
        params: {
          categoryId: category?.id,
          price_gte: priceStart,
          price_lte: priceEnd,
          _sort: sortType !== undefined ? 'price' : undefined,
          _order: sortType !== undefined ? SortTypes[sortType] : undefined,
          _expand: "category",
          q: search,
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