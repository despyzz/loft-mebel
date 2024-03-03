import {UserSchema} from "entities/User";
import {LoginSchema} from "feautures/AuthByUsername";
import {EnhancedStore} from "@reduxjs/toolkit";
import {ReducerManager} from "./reducerManager";
import {ProfileSchema} from "entities/Profile";
import {AxiosInstance} from "axios";
import {NavigateOptions, To} from "react-router-dom";
import {ProductDetailsSchema} from "entities/Product";
import {ProductCommentsSchema} from "pages/ProductPage";
import {AddCommentFormSchema} from "feautures/AddCommentForm";
import {MainPageSchema} from "pages/MainPage";

export interface StateSchema {
  user: UserSchema;

  // async reducers
  loginForm?: LoginSchema,
  profile?: ProfileSchema,
  productDetails?: ProductDetailsSchema,
  productComments?: ProductCommentsSchema,
  addCommentForm?: AddCommentFormSchema,

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