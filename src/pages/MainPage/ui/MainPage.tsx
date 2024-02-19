// import classes from './MainPage.module.scss';
import {Promo} from "widgets/Promo"
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {Navigation} from "widgets/Navigation";
import {Products} from "widgets/Products";
import {Counter} from "entities/Counter";

const MainPage = () => {
  return (
    <>
      <Counter />
      <Navigation />
      <Promo />
      <AppContainer>
        <Products />
      </AppContainer>
    </>
  );
}

export default MainPage;