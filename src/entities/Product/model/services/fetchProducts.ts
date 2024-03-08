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
      const mods: string[] = [];

      if (category) {
        mods.push(`categoryId=${category.id}`);
      }

      if (priceStart) {
        mods.push(`price_gte=${priceStart}`);
      }

      if (priceEnd) {
        mods.push(`price_lte=${priceEnd}`);
      }

      switch (sortType) {

        case SortTypes.descending:
          mods.push(`_sort=price&_order=desc`);
          break;

        case SortTypes.ascending:
          mods.push(`_sort=price&_order=asc`);
          break;

        default:
          break;
      }

      const responseUrl = '/products' + '?' + mods.join('&');

      const response = await extra.api.get<Array<Product>>(responseUrl);

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