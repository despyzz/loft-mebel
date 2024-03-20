import {configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import {StateSchema, ThunkExtraArg} from "./StateSchema";
import {userReducer} from "entities/User";
import {createReducerManager} from "./reducerManager";
import {$api} from "shared/api/api";
import {searchReducer} from "feautures/Search";
import {wishlistReducer} from "../../../../entities/Wishlist";

const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {

  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    search: searchReducer,
    wishlist: wishlistReducer
  }

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
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