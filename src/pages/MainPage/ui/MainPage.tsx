import classes from './MainPage.module.scss';
import {Promo} from "widgets/Promo"
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {Navigation} from "widgets/Navigation";
import {useCallback, useEffect} from "react";
import {useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";
import { Products} from "entities/Product";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {mainPageReducer} from "../model/slices/mainPageSlice";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Page} from "widgets/Page";
import AppButton from "shared/ui/AppButton/AppButton";

const reducers: ReducerList = {
  mainPageProducts: mainPageReducer,
}

const MainPage = () => {
  const dispatch = useAppDispatch();

  // auth data
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  return (
    <Page>
      <DynamicModuleLoader reducers={reducers}>
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
      </DynamicModuleLoader>
    </Page>
  );
}

export default MainPage;