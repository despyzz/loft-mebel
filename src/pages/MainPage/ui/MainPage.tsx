import classes from './MainPage.module.scss';
import {Promo} from "widgets/Promo"
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {Navigation} from "widgets/Navigation";
import AppButton from "shared/ui/AppButton/AppButton";
import {useCallback, useEffect} from "react";
import {useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";
import {ProductList} from "entities/Product";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {getMainPageProducts, mainPageReducer} from "../model/slices/mainPageSlice";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchMainPageProducts} from "../model/services/fetchMainPageProducts/fetchMainPageProducts";
import {Page} from "widgets/Page";

const reducers: ReducerList = {
  mainPageProducts: mainPageReducer
}

const MainPage = () => {
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const products = useSelector(getMainPageProducts.selectAll);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchMainPageProducts({page: 1}));
  }, [dispatch]);

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
            <ProductList productList={products}/>
          </AppContainer>
        </div>
      </DynamicModuleLoader>
    </Page>
  );
}

export default MainPage;