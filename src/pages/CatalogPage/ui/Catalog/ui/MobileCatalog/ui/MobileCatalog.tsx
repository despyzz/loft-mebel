import classes from './MobileCatalog.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {FilterButton} from "./FilterButton";
import {Sort, sortReducer} from "feautures/Sort";
import {memo} from "react";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {filterReducer} from "feautures/Filter";
import {Products} from "entities/Product";
import {productsReducer} from "entities/Product/model/slice/productsSlice";

const reducers: ReducerList = {
  sort: sortReducer,
  filter: filterReducer,
  products: productsReducer
}

const MobileCatalog = memo(() => {
  return (
    <DynamicModuleLoader reducers={reducers}>
      <AppContainer className={classes.Catalog}>
        <div className={classes.Header}>
          <FilterButton/>
          <Sort />
        </div>
        <Products
          trackCategory
          trackPrice
          trackSearch
          trackSortType
        />
      </AppContainer>
    </DynamicModuleLoader>
  );
});

export default MobileCatalog;