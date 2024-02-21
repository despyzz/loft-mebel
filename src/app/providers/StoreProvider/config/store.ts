import {configureStore} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema";
import {counterReducer} from "entities/Counter";
import {userReducer} from "entities/User";
import {loginReducer} from "feautures/AuthByUsername";

const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
      user: userReducer,
      loginForm: loginReducer,
    },
    preloadedState: initialState
  })
}

export {
  createReduxStore
}