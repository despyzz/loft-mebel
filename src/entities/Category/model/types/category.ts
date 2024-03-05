export interface Category {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface CategoryListSchema {
  isLoading: boolean;
  data?: Array<Category>;
  error?: string;
}
