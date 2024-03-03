import classes from './ProductList.module.scss';
import {ProductListItem} from "../ProductListItem/ProductListItem";
import {FC, useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {Product} from "../../model/types/product";

interface ProductsProps {
  className?: string;
  productList?: Array<Product>
}

const ProductList: FC<ProductsProps> = (props) => {
  const {
    className,
    productList= []
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
        productList.map((product, index) => (
          <ProductListItem product={product} key={index}/>
        ))
      }
    </div>
  );
};

export {ProductList};