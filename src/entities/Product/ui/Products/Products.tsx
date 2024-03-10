import {memo, MutableRefObject, useCallback, useEffect, useRef} from 'react';
import {SortTypes} from "feautures/Sort/model/types/sort";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Category} from "entities/Category";
import {fetchProducts} from "../../model/services/fetchProducts";
import {ProductList} from "../ProductList/ProductList";
import {Product} from "../../model/types/product";
import {useSelector} from "react-redux";
import {
  getProductsError,
  getProductsHasMore,
  getProductsIsLoading,
  getProductsPage
} from "../../model/selectors/productsSelectors";
import {getProducts, productsActions, productsReducer} from "../../model/slice/productsSlice";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useInfiniteScroll} from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

interface ProductsProps {
  category?: Category
  sortType?: SortTypes
  search?: string
  priceStart?: number
  priceEnd?: number
}

const reducers: ReducerList = {
  products: productsReducer
}

const Products = memo((props: ProductsProps) => {
  const {
    category,
    sortType,
    priceStart,
    priceEnd,
    search
  } = props;

  const dispatch = useAppDispatch();
  const products: Array<Product> = useSelector(getProducts.selectAll)
  const page = useSelector(getProductsPage)
  const hasMore = useSelector(getProductsHasMore)
  const isLoading = useSelector(getProductsIsLoading)
  const error = useSelector(getProductsError)

  useEffect(() => {
    dispatch(productsActions.setPage(1));
    dispatch(fetchProducts({
      category,
      sortType,
      priceStart,
      priceEnd,
      search,
      replace: true
    }));
  }, [dispatch, category, sortType, priceStart, priceEnd, search]);

  const onLoadNextPart = useCallback(() => {
    const newPage = page + 1;
    if (hasMore && !isLoading && !error) {
      dispatch(productsActions.setPage(newPage))
      dispatch(fetchProducts({
        page: newPage
      }))
    }
  }, [dispatch, page, hasMore, isLoading, error]);

  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  useInfiniteScroll({
    triggerRef,
    callback: onLoadNextPart
  })

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ProductList
        isLoading={isLoading}
        productList={products}
      />
      <div ref={triggerRef}/>
    </DynamicModuleLoader>
  );
});

export default Products;