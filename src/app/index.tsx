import React, {useEffect} from 'react';
import './styles/index.scss';
import AppRouter from "./providers/AppRouter/ui/AppRouter";
import Header from "widgets/Header";
import Footer from "widgets/Footer";
import {useDispatch} from "react-redux";
import {userActions} from "../entities/User";

function App() {

  const dispatch = useDispatch();

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