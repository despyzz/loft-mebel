import classes from './Products.module.scss';
import {ProductCard} from "widgets/ProductCard";

const Products = () => {
  return (
    <div className={classes.Products}>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  );
};

export {Products};