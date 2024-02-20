import classes from './MainPage.module.scss';
import {Promo} from "widgets/Promo"
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {Navigation} from "widgets/Navigation";
import {Products} from "widgets/Products";

const MainPage = () => {

  return (
    <div className={classes.MainPage}>
      <Navigation/>
      <Promo/>
      <AppContainer>
        <Products/>
      </AppContainer>
    </div>
  );
}

export default MainPage;