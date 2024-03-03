import classes from './MainPage.module.scss';
import {Promo} from "widgets/Promo"
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {Navigation} from "widgets/Navigation";
import AppButton from "shared/ui/AppButton/AppButton";
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";
import {ProductList} from "entities/Product";

const MainPage = () => {
  const dispatch = useDispatch();

  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  return (
    <div className={classes.MainPage}>

      {
        authData &&
        <AppContainer>
          <AppButton
            style={{border: "1px solid grey", padding: "15px", color: "grey", fontSize: "16px"}}
            onClick={onLogout}
          >
            LOGOUT
          </AppButton>
        </AppContainer>
      }
      <Navigation/>
      <Promo/>
      <AppContainer>
        <ProductList/>
      </AppContainer>
    </div>
  );
}

export default MainPage;