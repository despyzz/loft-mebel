import classes from './DesktopCatalog.module.scss';

import {Products} from "widgets/Products";
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {SortButton} from "widgets/SortButton";
import {Filter} from "widgets/Filter";

const DesktopCatalog = () => {
  return (
    <div>
      <AppContainer className={classes.Catalog}>
        <Filter />
        <div className={classes.Group}>
          <SortButton />
          <Products className={classes.Products}/>
        </div>
      </AppContainer>
    </div>
  );
};

export default DesktopCatalog;