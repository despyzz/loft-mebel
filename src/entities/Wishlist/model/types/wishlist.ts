export interface Wishlist {
  id: string;
  userId: string;
  productsIds: string[];
}

export interface WishlistSchema {
  isLoading: boolean;
  data?: Wishlist;
  error?: string;
}
