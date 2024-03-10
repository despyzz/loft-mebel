import classes from './MobileCatalog.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {FilterButton} from "./FilterButton";
import {getSortTypes, Sort, sortReducer} from "feautures/Sort";
import {memo} from "react";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {filterReducer, getFilterCategory, getFilterPrice} from "feautures/Filter";
import {useSelector} from "react-redux";
import {Products} from "entities/Product";
import {productsReducer} from "entities/Product/model/slice/productsSlice";
import {getSearchValue} from "feautures/Search/model/selectors/searchSelectors";

const reducers: ReducerList = {
  sort: sortReducer,
  filter: filterReducer,
  products: productsReducer
}

const MobileCatalog = memo(() => {
  const sortType = useSelector(getSortTypes);
  const category = useSelector(getFilterCategory)
  const {start , end} = useSelector(getFilterPrice);
  const search = useSelector(getSearchValue);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <AppContainer className={classes.Catalog}>
        <div className={classes.Header}>
          <FilterButton/>
          <Sort />
        </div>
        <Products
          category={category}
          sortType={sortType}
          priceStart={start}
          priceEnd={end}
          search={search}
        />
      </AppContainer>
    </DynamicModuleLoader>
  );
});

export default MobileCatalog;