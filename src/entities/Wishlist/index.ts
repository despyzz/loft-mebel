import {getWishlistData, getWishlistError, getWishlistIsLoading} from "./model/selectors/wishlistSelectors";
import { addToWishlist } from "./model/services/addToWishlist";
import {fetchWishlist} from "./model/services/fetchWishlist";
import { removeFromWishlist } from "./model/services/removeFromWishlist";
import {wishlistActions, wishlistReducer} from "./model/slices/wishlistSlice";
import {type WishlistSchema} from "./model/types/wishlist";

export {
  WishlistSchema,
  wishlistActions,
  wishlistReducer,
  fetchWishlist,
  getWishlistIsLoading,
  getWishlistError,
  getWishlistData,
  addToWishlist,
  removeFromWishlist
}