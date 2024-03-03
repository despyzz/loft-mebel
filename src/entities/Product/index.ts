import { getProductData } from "./model/selectors/getProductData/getProductData";
import { productDetailsActions, productDetailsReducer } from "./model/slice/productDetailsSlice";
import { productListReducer } from "./model/slice/productListSlice";
import type { Product } from "./model/types/product";
import type { ProductDetailsSchema } from "./model/types/productDetailsSchema";
import type { ProductListSchema } from "./model/types/productListSchema";
import ProductDetails from "./ui/ProductDetails/ProductDetails";
import { ProductList } from "./ui/ProductList/ProductList";
import { ProductListItem } from "./ui/ProductListItem/ProductListItem";

export {
  Product,
  ProductDetails,
  ProductDetailsSchema,
  productDetailsReducer,
  productDetailsActions,
  getProductData,
  ProductListItem,
  ProductList,
  productListReducer,
  ProductListSchema
}