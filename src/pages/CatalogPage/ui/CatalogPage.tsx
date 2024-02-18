import classes from './CatalogPage.module.scss';
import {Catalog} from "./Catalog";
import {Navigation} from "widgets/Navigation";

const CatalogPage = () => {


  return (
    <div className={classes.CatalogPage}>
      <Navigation />
      <Catalog />
    </div>
  );
};

export default CatalogPage;