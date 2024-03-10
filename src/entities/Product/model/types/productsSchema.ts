import {Product} from "./product";
import {EntityState} from "@reduxjs/toolkit";

export interface ProductsSchema extends EntityState<Product, string> {
  isLoading: boolean,
  error?: string,

  // pagination
  page: number
  limit: number
  hasMore: boolean
}