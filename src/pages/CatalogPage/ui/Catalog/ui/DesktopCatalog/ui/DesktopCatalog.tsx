import classes from './DesktopCatalog.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {ProductList} from "entities/Product";
import {Filter} from "feautures/Filter";
import {Sort} from "feautures/Sort";
import {memo} from "react";

const DesktopCatalog = memo(() => {
  return (
    <div>
      <AppContainer className={classes.Catalog}>
        <Filter />
        <div className={classes.Group}>
          <Sort />
          <ProductList className={classes.Products}/>
        </div>
      </AppContainer>
    </div>
  );
});

export default DesktopCatalog;