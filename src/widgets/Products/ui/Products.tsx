import classes from './Products.module.scss';
import {ProductCard} from "widgets/ProductCard";
import {FC, useEffect, useRef, useState} from "react";
import classNames from "classnames";

interface ProductsProps {
  className?: string
}

const Products: FC<ProductsProps> = (props) => {
  const {className} = props;
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