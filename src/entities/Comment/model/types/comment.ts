import {User} from "entities/User";

export interface Comment {
  id: string;
  body: string;
  productId: string;
  userId: string;
  user: User;
}

export interface CommentSchema {
  isLoading: boolean;
  data?: Comment;
  error?: string;
}
