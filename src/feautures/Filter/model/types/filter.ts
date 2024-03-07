import {Category} from "entities/Category";

export interface Price {
  start: number;
  end: number;
}

export interface Filter {
  category?: Category;
  price: Price;
}

export interface FilterSchema {
  isLoading?: boolean;
  error?: string;
  data: Filter;
}