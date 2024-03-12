import {Category} from "entities/Category";

export interface Product {
  id: string;
  name: string;
  description: Array<string>;
  photos: Array<string>;
  rating: number;
  price: number;
  categoryId: string;
  category: Category;
  characteristics: Array<{
    name: string,
    value: string
  }>
  sizes: {
    width: string,
    depth: string,
    height: string
  }
}