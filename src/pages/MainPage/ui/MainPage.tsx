import classes from './MainPage.module.scss';
import {Promo} from "widgets/Promo"
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {Navigation} from "widgets/Navigation";
import {Products} from "entities/Product";
import {Page} from "widgets/Page";

const MainPage = () => {
  return (
    <Page>
      <div className={classes.MainPage}>
        <Navigation/>
        <Promo/>
        <AppContainer>
          <Products/>
        </AppContainer>
      </div>
    </Page>
  );
}

export default MainPage;