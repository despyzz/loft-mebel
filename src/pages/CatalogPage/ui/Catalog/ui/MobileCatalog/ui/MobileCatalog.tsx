import classes from './MobileCatalog.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {FilterButton} from "./FilterButton";
import {SortButton} from "widgets/SortButton";
import {ProductList} from "entities/Product";

const MobileCatalog = () => {
  return (
    <AppContainer className={classes.Catalog}>
      <div className={classes.Header}>
        <FilterButton/>
        <SortButton />
      </div>
      <ProductList className={classes.Products}/>
    </AppContainer>
  );
};

export default MobileCatalog;