import classes from './MainPage.module.scss';
import {Promo} from "widgets/Promo"
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {ProductCard} from "widgets/ProductCard";

const MainPage = () => {
  return (
    <>
      <Promo />
      <AppContainer>
        <div className={classes.Cards}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </AppContainer>
    </>
  );
}

export default MainPage;