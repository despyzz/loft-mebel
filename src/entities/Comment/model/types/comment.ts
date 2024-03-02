export interface Comment {
  id: string;
  body: string;
  productId: string;
  userId: string;
}

export interface CommentSchema {
  isLoading: boolean;
  data?: Comment;
  error?: string;
}
