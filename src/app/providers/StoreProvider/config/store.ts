import {configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import {StateSchema, ThunkExtraArg} from "./StateSchema";
import {userReducer} from "entities/User";
import {createReducerManager} from "./reducerManager";
import {$api} from "shared/api/api";
import { NavigateOptions, To } from "react-router-dom";

const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) => {

  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as unknown as ReducersMapObject<StateSchema>,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
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