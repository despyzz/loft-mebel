import classes from './CartPage.module.scss'
import {CartSection} from "./CartSection";
import {RecommendationSection} from "./RecommendationSection";
import {Page} from "widgets/Page";

const CartPage = () => {
  return (
    <Page className={classes.CartPage}>
      <CartSection />
      <RecommendationSection />
    </Page>
  );
};

export default CartPage;