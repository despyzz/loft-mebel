import classes from './MainPage.module.scss';
import {Promo} from "widgets/Promo"
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {Navigation} from "widgets/Navigation";
import {useCallback} from "react";
import {useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";
import {Products} from "entities/Product";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Page} from "widgets/Page";
import AppButton from "shared/ui/AppButton/AppButton";

const MainPage = () => {
  const dispatch = useAppDispatch();

  // auth data
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  return (
    <Page>
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
          <Products/>
        </AppContainer>
      </div>
    </Page>
  );
}

export default MainPage;