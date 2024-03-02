import { getProductData } from "./model/selectors/getProductData/getProductData";
import { productDetailsActions, productDetailsReducer } from "./model/slice/productDetailsSlice";
import type { Product } from "./model/types/product";
import type { ProductDetailsSchema } from "./model/types/productDetailsSchema";
import ProductDetails from "./ui/ProductDetails/ProductDetails";

export {
  Product,
  ProductDetails,
  ProductDetailsSchema,
  productDetailsReducer,
  productDetailsActions,
  getProductData
}