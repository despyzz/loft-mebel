import {configureStore} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema";
import {counterReducer} from "entities/Counter";

const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
  reducer: {
    counter: counterReducer
  },
  preloadedState: initialState
})

export {
  createReduxStore
}