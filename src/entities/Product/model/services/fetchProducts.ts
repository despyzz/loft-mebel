import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Category} from "entities/Category";
import {Product} from "../types/product";
import {SortTypes} from "feautures/Sort/model/types/sort";

interface fetchProductsProps {
  category?: Category
  sortType?: SortTypes
  priceStart?: number
  priceEnd?: number
}

export const fetchProducts = createAsyncThunk<Array<Product>, fetchProductsProps, ThunkConfig<string>>(
  'fetchProducts',
  async (props, thunkAPI) => {
    const {
      extra,
      rejectWithValue
    } = thunkAPI;

    const {
      category,
      sortType,
      priceStart,
      priceEnd
    } = props;

    try {
      const response = await extra.api.get<Array<Product>>('/products', {
          params: {
            categoryId: category?.id,
            price_gte: priceStart,
            price_lte: priceEnd,
            _sort: sortType ? 'price' : undefined,
            _order: sortType ? SortTypes[sortType] : undefined,
          }
        })
      ;

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