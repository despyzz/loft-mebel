import {UserSchema} from "entities/User";
import {LoginSchema} from "feautures/AuthByUsername";
import {EnhancedStore} from "@reduxjs/toolkit";
import {ReducerManager} from "./reducerManager";
import {ProfileSchema} from "entities/Profile";
import {AxiosInstance} from "axios";
import {NavigateOptions, To} from "react-router-dom";
import {ProductDetailsSchema, ProductsSchema} from "entities/Product";
import {ProductCommentsSchema} from "pages/ProductPage";
import {AddCommentFormSchema} from "feautures/AddCommentForm";
import {MainPageSchema} from "pages/MainPage";
import {CategoryListSchema} from "entities/Category/model/types/category";
import {FilterSchema} from "feautures/Filter/model/types/filter";
import {SortSchema} from "feautures/Sort";
import {SearchSchema} from "../../../../feautures/Search/model/types/search";

export interface StateSchema {
  user: UserSchema
  search: SearchSchema

  // async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  productDetails?: ProductDetailsSchema
  productComments?: ProductCommentsSchema
  addCommentForm?: AddCommentFormSchema
  categoryList?: CategoryListSchema
  filter?: FilterSchema
  sort?: SortSchema
  products?: ProductsSchema

  mainPageProducts?: MainPageSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArg,
  state: StateSchema
}