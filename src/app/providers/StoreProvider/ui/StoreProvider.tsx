import React, {FC} from 'react';
import {Provider} from "react-redux";
import {createReduxStore} from "../config/store";
import {StateSchema} from "../config/StateSchema";
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
  children: React.ReactNode;
  initialState?: StateSchema
}

const StoreProvider: FC<StoreProviderProps> = (props: StoreProviderProps) => {
  const {
    children,
    initialState
  } = props;

  const navigate = useNavigate()

  const store = createReduxStore(
    initialState,
    navigate,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;