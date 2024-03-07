import classes from './MobileCatalog.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {FilterButton} from "./FilterButton";
import {Sort} from "feautures/Sort";
import {ProductList} from "entities/Product";
import {memo} from "react";

const MobileCatalog = memo(() => {
  return (
    <AppContainer className={classes.Catalog}>
      <div className={classes.Header}>
        <FilterButton/>
        <Sort />
      </div>
      <ProductList className={classes.Products}/>
    </AppContainer>
  );
});

export default MobileCatalog;