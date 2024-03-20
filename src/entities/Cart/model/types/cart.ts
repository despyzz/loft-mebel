export interface Cart {
  id: string;
  userId: string;
  productsIds: string[];
}

export interface CartSchema {
  isLoading: boolean;
  data?: Cart;
  error?: string;
}
