import classes from './DesktopCatalog.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {SortButton} from "widgets/SortButton";
import {ProductList} from "entities/Product";
import {Filter} from "feautures/Filter";

const DesktopCatalog = () => {
  return (
    <div>
      <AppContainer className={classes.Catalog}>
        <Filter />
        <div className={classes.Group}>
          <SortButton />
          <ProductList className={classes.Products}/>
        </div>
      </AppContainer>
    </div>
  );
};

export default DesktopCatalog;