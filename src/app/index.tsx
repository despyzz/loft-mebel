import React, {useEffect} from 'react';
import './styles/index.scss';
import AppRouter from "./providers/AppRouter/ui/AppRouter";
import Header from "widgets/Header";
import Footer from "widgets/Footer";
import {useSelector} from "react-redux";
import {getUserAuthData, userActions} from "../entities/User";
import {useAppDispatch} from "../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchCart } from 'entities/Cart';
import { fetchWishlist } from 'entities/Wishlist';

function App() {
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData)

  useEffect(() => {
    const userId = authData?.id;
    if (userId) {
      dispatch(fetchWishlist(userId));
      dispatch(fetchCart(userId));
    }
  }, [dispatch, authData]);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <AppRouter/>
      <Footer className="Footer" />
    </div>
  );
}

export default App;