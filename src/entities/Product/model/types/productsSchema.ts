import {Product} from "./product";

export interface ProductsSchema {
  isLoading: boolean,
  error?: string,
  data?: Array<Product>
}