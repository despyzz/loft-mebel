import classes from './CatalogPage.module.scss';
import {Catalog} from "./Catalog";
import {Navigation} from "widgets/Navigation";
import {Page} from "widgets/Page";

const CatalogPage = () => {
  return (
    <Page className={classes.CatalogPage}>
      <Navigation />
      <Catalog />
    </Page>
  );
};

export default CatalogPage;