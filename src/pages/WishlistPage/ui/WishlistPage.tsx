import React, {memo, useEffect, useState} from 'react';
import classes from './WishlistPage.module.scss';
import {Page} from "widgets/Page";
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {getWishlistData, getWishlistError, getWishlistIsLoading} from "entities/Wishlist";
import {useSelector} from "react-redux";
import Loader from "widgets/Loader";
import {Product, ProductList, Products} from 'entities/Product';
import {$api} from "shared/api/api";

const WishlistPage = () => {
  const data = useSelector(getWishlistData)
  const error = useSelector(getWishlistError)
  const isLoading = useSelector(getWishlistIsLoading)

  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    if (data)
      $api.post('/products-info', {
        ids: data.productsIds
      })
        .then(response => response.data)
        .then(setProducts)
        .catch(error => console.log(error))
  }, [data]);

  if (error) {
    return (
      <Page className={classes.WishlistPage}>
        <AppContainer>
          <h1>
            Произошла ошибка при загрузке данных
          </h1>
        </AppContainer>
      </Page>
    )
  }

  if (isLoading) {
    return (
      <Page className={classes.WishlistPage}>
        <AppContainer>
          <Loader/>
        </AppContainer>
      </Page>
    )
  }

  return (
    <Page >
      <AppContainer className={classes.WishlistPage}>
        <h1 className={classes.Title}>
          Список желаемого
        </h1>
        {
          products.length
          ?
            <ProductList productList={products} isLoading={isLoading}/>
          :
            <div className={classes.Empty}>
              Список желаемого пуст
            </div>
        }
        <div className={classes.Title}>
          Рекомендации
        </div>
        <Products/>
      </AppContainer>
    </Page>
  );
};

export default memo(WishlistPage);