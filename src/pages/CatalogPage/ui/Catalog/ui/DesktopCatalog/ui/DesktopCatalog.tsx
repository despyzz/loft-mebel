import classes from './DesktopCatalog.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {Filter, filterReducer} from "feautures/Filter";
import {Sort, sortReducer} from "feautures/Sort";
import {memo} from "react";
import Products from "entities/Product/ui/Products/Products";
import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {productsReducer} from "entities/Product/model/slice/productsSlice";

const reducers: ReducerList = {
  sort: sortReducer,
  filter: filterReducer,
  products: productsReducer
}

const DesktopCatalog = memo(() => {
  return (
    <DynamicModuleLoader reducers={reducers}>
      <AppContainer className={classes.Catalog}>
        <Filter />
        <div className={classes.Group}>
          <Sort />
          <Products
            trackCategory
            trackPrice
            trackSearch
            trackSortType
          />
        </div>
      </AppContainer>
    </DynamicModuleLoader>
  );
});

export default DesktopCatalog;