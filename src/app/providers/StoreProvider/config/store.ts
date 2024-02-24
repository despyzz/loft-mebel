import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema";
import {userReducer} from "entities/User";
import {createReducerManager} from "./reducerManager";
import {$api} from "shared/api/api";
import { NavigateOptions, To } from "react-router-dom";

const createReduxStore = (
  initialState?: StateSchema,
  navigate?: (to: To, options?: NavigateOptions) => void,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate
        }
      }
    })
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store;
}

export {
  createReduxStore
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];