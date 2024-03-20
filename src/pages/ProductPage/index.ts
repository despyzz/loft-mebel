import { getProductCommentsIsLoading } from "./model/selectors/getProductCommentsIsLoading/getProductCommentsIsLoading";
import { addCommentForProduct } from "./model/services/addCommentForProduct/addCommentForProduct";
import { fetchCommentsByProductId } from "./model/services/fetchCommentsByProductId/fetchCommentsByProductId";
import type { ProductCommentsSchema } from "./model/types/productComments";
import {ProductPageAsync} from "./ui/ProductPage.async";
export {
  ProductPageAsync as ProductPage,
  ProductCommentsSchema,
  fetchCommentsByProductId,
  addCommentForProduct,
  getProductCommentsIsLoading
}