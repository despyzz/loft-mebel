import {memo, useEffect} from 'react';
import {SortTypes} from "feautures/Sort/model/types/sort";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Category} from "entities/Category";
import {fetchProducts} from "../../model/services/fetchProducts";
import {ProductList} from "../ProductList/ProductList";
import {Product} from "../../model/types/product";
import {useSelector} from "react-redux";
import {getProductsData} from "../../model/selectors/productsSelectors";

interface ProductsProps {
  category?: Category
  sortType?: SortTypes
  priceStart?: number
  priceEnd?: number
}

const Products = memo((props: ProductsProps) => {
  const {
    category,
    sortType,
    priceStart,
    priceEnd
  } = props;

  const dispatch = useAppDispatch();
  const products: Array<Product> = useSelector(getProductsData)

  useEffect(() => {
    dispatch(fetchProducts({
      category,
      sortType,
      priceStart,
      priceEnd
    }));
  }, [dispatch, category, sortType, priceStart, priceEnd]);

  return (
    <ProductList productList={products}/>
  );
});

export default Products;