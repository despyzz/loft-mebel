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
    productList= [
      {
        id: "10",
        name: "Товар 10",
        description: [
          "Описание дивана",
          "Параграф первый",
          "Параграф второй"
        ],
        photos: [
          "https://segmart.com/cdn/shop/products/20220923_c2a927726c80a666ca1b99ce90f4d30c_900x.jpg?v=1665632194",
          "https://segmart.com/cdn/shop/products/20220923_c2a927726c80a666ca1b99ce90f4d30c_900x.jpg?v=1665632194",
          "https://segmart.com/cdn/shop/products/20220923_c2a927726c80a666ca1b99ce90f4d30c_900x.jpg?v=1665632194",
          "https://segmart.com/cdn/shop/products/20220923_c2a927726c80a666ca1b99ce90f4d30c_900x.jpg?v=1665632194",
          "https://segmart.com/cdn/shop/products/20220923_c2a927726c80a666ca1b99ce90f4d30c_900x.jpg?v=1665632194",
          "https://segmart.com/cdn/shop/products/20220923_c2a927726c80a666ca1b99ce90f4d30c_900x.jpg?v=1665632194",
          "https://segmart.com/cdn/shop/products/20220923_c2a927726c80a666ca1b99ce90f4d30c_900x.jpg?v=1665632194",
          "https://segmart.com/cdn/shop/products/20220923_c2a927726c80a666ca1b99ce90f4d30c_900x.jpg?v=1665632194"
        ],
        rating: 10,
        price: 19990,
        categoryId: "1",
        characteristics: [
          {
            name: "Свойство номер 1",
            value: "Значение номер 1"
          },
          {
            name: "Свойство номер 2",
            value: "Значение номер 2"
          },
          {
            name: "Свойство номер 3",
            value: "Значение номер 3"
          },
          {
            name: "Свойство номер 4",
            value: "Значение номер 4"
          },
          {
            name: "Свойство номер 5",
            value: "Значение номер 5"
          },
          {
            name: "Свойство номер 6",
            value: "Значение номер 6"
          },
          {
            name: "Свойство номер 7",
            value: "Значение номер 7"
          },
          {
            name: "Свойство номер 8",
            value: "Значение номер 8"
          },
          {
            name: "Свойство номер 9",
            value: "Значение номер 9"
          },
          {
            name: "Свойство номер 10",
            value: "Значение номер 10"
          }
        ],
        sizes: {
          "width": "43",
          "depth": "43",
          "height": "77"
        }
      }
    ]
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