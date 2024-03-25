import classes from './CatalogPage.module.scss';
import {Catalog} from "./Catalog";
import {Page} from "widgets/Page";

const CatalogPage = () => {
  return (
    <Page className={classes.CatalogPage}>
      <Catalog />
    </Page>
  );
};

export default CatalogPage;