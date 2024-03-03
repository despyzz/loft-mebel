import classes from './ProductList.module.scss';
import {ProductListItem} from "../ProductListItem/ProductListItem";
import {FC, memo, useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {Product} from "../../model/types/product";
import Loader from "widgets/Loader";

interface ProductsProps {
  className?: string;
  productList?: Array<Product>;
  isLoading?: boolean
}

const renderList = (productList: Array<Product>) => {
  return productList.map((product, index) => (
    <ProductListItem product={product} key={index}/>
  ))
}

const getLoaders = () => new Array(8)
  .fill(0)
  .map((_, index) => (
    <div className={classes.LoaderWrapper}>
      <Loader key={index}/>
    </div>
  ));


const ProductList: FC<ProductsProps> = memo((props) => {
  const {
    className,
    isLoading,
    productList = []
  } = props;
  const productsRef = useRef<HTMLDivElement>(null);

  const [style, setStyle] = useState(classes.ProductsMobile);

  useEffect(() => {
    const checkWidth = () => {
      const width = productsRef.current!.offsetWidth;

      if (width <= 600) {
        setStyle(() => classes.ProductsMobile)
      } else if (width <= 900) {
        setStyle(() => classes.ProductsTablet)
      } else if (width > 900) {
        setStyle(() => classes.ProductsDesktop)
      }
    }

    checkWidth();

    window.addEventListener('resize', checkWidth);

    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, []);

  return (
    <div
      className={classNames(className, classes.Products, style)}
      ref={productsRef}
    >
      {
        productList.length > 0 ? renderList(productList) : null
      }
      {
        isLoading && getLoaders()
      }
    </div>
  );
});

export {ProductList};