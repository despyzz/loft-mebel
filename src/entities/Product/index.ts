import { getProductData } from "./model/selectors/getProductData/getProductData";
import { productDetailsActions, productDetailsReducer } from "./model/slice/productDetailsSlice";
import type { Product } from "./model/types/product";
import type { ProductDetailsSchema } from "./model/types/productDetailsSchema";
import type { ProductsSchema } from "./model/types/productsSchema";
import ProductDetails from "./ui/ProductDetails/ProductDetails";
import { ProductList } from "./ui/ProductList/ProductList";
import { ProductListItem } from "./ui/ProductListItem/ProductListItem";
import Products from "./ui/Products/Products";

export {
  Product,
  ProductDetails,
  ProductDetailsSchema,
  productDetailsReducer,
  productDetailsActions,
  getProductData,
  ProductListItem,
  ProductList,
  Products,
  ProductsSchema
}