import React, {FC} from 'react';
import {Provider} from "react-redux";
import {createReduxStore} from "../config/store";
import {StateSchema} from "../config/StateSchema";

interface StoreProviderProps {
  children: React.ReactNode;
  initialState?: StateSchema
}

const StoreProvider: FC<StoreProviderProps> = (props: StoreProviderProps) => {
  const {
    children,
    initialState
  } = props;
  return (
    <Provider store={createReduxStore(initialState)}>
      {children}
    </Provider>
  );
};

export default StoreProvider;