import {EntityState} from "@reduxjs/toolkit";
import {Product} from "./product";

export interface ProductListSchema extends EntityState<Product, string>{
  isLoading: boolean;
  error?: string
}