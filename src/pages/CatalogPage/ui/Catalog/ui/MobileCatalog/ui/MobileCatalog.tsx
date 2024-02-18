import classes from './MobileCatalog.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {Products} from "widgets/Products";
import {FilterButton} from "./FilterButton";
import {SortButton} from "widgets/SortButton";

const MobileCatalog = () => {
  return (
    <AppContainer className={classes.Catalog}>
      <div className={classes.Header}>
        <FilterButton/>
        <SortButton />
      </div>
      <Products className={classes.Products}/>
    </AppContainer>
  );
};

export default MobileCatalog;