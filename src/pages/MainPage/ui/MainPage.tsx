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
import {getMainPageProducts, mainPageActions, mainPageReducer} from "../model/slices/mainPageSlice";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchMainPageProducts} from "../model/services/fetchMainPageProducts/fetchMainPageProducts";
import {Page} from "widgets/Page";
import {getMainPageProductsPage} from "../model/selectors/getMainPageProductsPage/getMainPageProductsPage";
import {
  getMainPageProductsIsLoading
} from "../model/selectors/getMainPageProductsIsLoading/getMainPageProductsIsLoading";
import {getMainPageProductsHasMore} from "../model/selectors/getMainPageProductsHasMore/getMainPageProductsHasMore";

const reducers: ReducerList = {
  mainPageProducts: mainPageReducer
}

const MainPage = () => {
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const products = useSelector(getMainPageProducts.selectAll);
  const page = useSelector(getMainPageProductsPage);
  const isLoading = useSelector(getMainPageProductsIsLoading);
  const hasMore = useSelector(getMainPageProductsHasMore);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const onLoadNextPart = useCallback(() => {
    const newPage = page + 1;
    if (hasMore) {
      dispatch(mainPageActions.setPage(newPage))
      dispatch(fetchMainPageProducts({
        page: newPage
      }))
    }
  }, [dispatch, page, hasMore]);

  useEffect(() => {
    dispatch(fetchMainPageProducts({page: 1}));
  }, [dispatch]);

  return (
    <Page onScrollEnd={onLoadNextPart}>
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
            <ProductList
              isLoading={isLoading}
              productList={products}
            />
          </AppContainer>
        </div>
      </DynamicModuleLoader>
    </Page>
  );
}

export default MainPage;