import classes from './CartPage.module.scss'
import {CartSection} from "./CartSection";
import {RecommendationSection} from "./RecommendationSection";

const CartPage = () => {
  return (
    <div className={classes.CartPage}>
      <CartSection />
      <RecommendationSection />
    </div>
  );
};

export default CartPage;