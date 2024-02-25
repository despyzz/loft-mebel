import {UserSchema} from "entities/User";
import {LoginSchema} from "feautures/AuthByUsername";
import {EnhancedStore} from "@reduxjs/toolkit";
import {ReducerManager} from "./reducerManager";
import {ProfileSchema} from "entities/Profile";
import {AxiosInstance} from "axios";
import {NavigateOptions, To} from "react-router-dom";

export interface StateSchema {
  user: UserSchema;

  // async reducers
  loginForm?: LoginSchema,
  profile?: ProfileSchema,
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
}