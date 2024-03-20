import {getWishlistData, getWishlistError, getWishlistIsLoading} from "./model/selectors/wishlistSelectors";
import {fetchWishlist} from "./model/services/fetchWishlist";
import {wishlistActions, wishlistReducer} from "./model/slices/wishlistSlice";
import {type WishlistSchema} from "./model/types/wishlist";

export {
  WishlistSchema,
  wishlistActions,
  wishlistReducer,
  fetchWishlist,
  getWishlistIsLoading,
  getWishlistError,
  getWishlistData
}