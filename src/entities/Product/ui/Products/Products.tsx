import {memo, MutableRefObject, useCallback, useEffect, useRef} from 'react';
import {SortTypes} from "feautures/Sort/model/types/sort";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getCategoryListData} from "entities/Category";
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
import {getFilterCategory, getFilterPrice} from "../../../../feautures/Filter";
import {getSortTypes} from "../../../../feautures/Sort";
import {getSearchValue} from "../../../../feautures/Search";
import useDebounce from "../../../../shared/lib/hooks/useDebounce/useDebounce";
import {addQueryParams} from "../../../../shared/url/addQueryParams/addQueryParams";
import {useSearchParams} from 'react-router-dom';
import {filterActions} from "../../../../feautures/Filter/model/slices/filterSlice";
import {sortActions} from "../../../../feautures/Sort/model/slices/sortSlice";
import {searchActions} from "../../../../feautures/Search/model/slices/SearchSlice";

interface ProductsProps {
  trackCategory?: boolean
  trackSearch?: boolean
  trackPrice?: boolean
  trackSortType?: boolean
}

const reducers: ReducerList = {
  products: productsReducer,
}

const Products = memo((props: ProductsProps) => {
  const {
    trackCategory = false,
    trackSearch = false,
    trackPrice = false,
    trackSortType = false
  } = props;

  const dispatch = useAppDispatch();
  const products: Array<Product> = useSelector(getProducts.selectAll)
  const page = useSelector(getProductsPage)
  const hasMore = useSelector(getProductsHasMore)
  const isLoading = useSelector(getProductsIsLoading)
  const error = useSelector(getProductsError)

  const category = useSelector(getFilterCategory)
  const sortType = useSelector(getSortTypes)
  const {start, end} = useSelector(getFilterPrice)
  const search = useSelector(getSearchValue)

  const [searchParams] = useSearchParams()

  const fetch = useCallback(() => {
    if (trackCategory || trackPrice || trackSearch || trackSearch) {
      addQueryParams({
        category: category?.id,
        sortType: sortType !== undefined ? sortType.toString() : undefined,
        search: search !== '' ? search : undefined,
        start: start.toString(),
        end: end.toString()
      })
    }

    dispatch(productsActions.setPage(1))
    dispatch(fetchProducts({
      category: trackCategory ? category : undefined,
      sortType: trackSortType ? sortType : undefined,
      priceStart: trackPrice ? start : undefined,
      priceEnd: trackPrice ? end : undefined,
      search: trackSearch ? search : '',
      replace: true,
    }));
  }, [category, sortType, start, end, search, dispatch, trackSortType, trackSearch, trackCategory, trackPrice])

  const categoriesListData = useSelector(getCategoryListData);

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category')
    const sortTypeFromUrl = searchParams.get('sortType')
    const searchFromUrl = searchParams.get('search')
    const startFromUrl = searchParams.get('start')
    const endFromUrl = searchParams.get('end')

    if (categoryFromUrl) {
      let category = undefined;
      for (let i of categoriesListData) {
        if (categoryFromUrl == i.id) {
          category = i;
          break
        }
      }
      if (category) {
        dispatch(filterActions.setCategory(category))
      }
    }

    if (sortTypeFromUrl !== undefined) {
      if (sortTypeFromUrl) {
        dispatch(sortActions.setType(sortTypeFromUrl as unknown as SortTypes))
      }
    }

    if (searchFromUrl !== undefined) {
      if (searchFromUrl) {
        dispatch(searchActions.setValue(searchFromUrl))
      }
    }

    if (startFromUrl !== null && endFromUrl !== null) {
      dispatch(filterActions.setPrice({
        start: Number(startFromUrl),
        end: Number(endFromUrl)
      }))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesListData]);

  const debouncedFetch = useDebounce(fetch, 500)

  // fetch on first time, category, sortType, price change
  useEffect(() => {
    debouncedFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sortType, start, end, search]);


  const onLoadNextPart = useCallback(() => {
    const newPage = page + 1;
    if (hasMore && !isLoading && !error) {
      dispatch(productsActions.setPage(newPage))
      dispatch(fetchProducts({
        category: trackCategory ? category : undefined,
        sortType: trackSortType ? sortType : undefined,
        priceStart: trackPrice ? start : undefined,
        priceEnd: trackPrice ? end : undefined,
        search: trackSearch ? search : '',
        page: newPage
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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