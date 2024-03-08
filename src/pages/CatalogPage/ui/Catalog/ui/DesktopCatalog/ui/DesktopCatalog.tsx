import classes from './DesktopCatalog.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {Filter, filterReducer, getFilterCategory, getFilterPrice} from "feautures/Filter";
import {getSortTypes, Sort, sortReducer} from "feautures/Sort";
import {memo} from "react";
import Products from "entities/Product/ui/Products/Products";
import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {productsReducer} from "entities/Product/model/slice/productsSlice";
import {useSelector} from "react-redux";

const reducers: ReducerList = {
  sort: sortReducer,
  filter: filterReducer,
  products: productsReducer
}

const DesktopCatalog = memo(() => {
  const sortType = useSelector(getSortTypes);
  const category = useSelector(getFilterCategory)
  const {start , end} = useSelector(getFilterPrice);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <AppContainer className={classes.Catalog}>
        <Filter />
        <div className={classes.Group}>
          <Sort />
          <Products
            category={category}
            sortType={sortType}
            priceStart={start}
            priceEnd={end}
          />
        </div>
      </AppContainer>
    </DynamicModuleLoader>
  );
});

export default DesktopCatalog;