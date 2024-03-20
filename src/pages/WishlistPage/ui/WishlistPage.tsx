import React, {memo} from 'react';
import classes from './WishlistPage.module.scss';
import {Page} from "widgets/Page";
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {getWishlistData, getWishlistError, getWishlistIsLoading} from "entities/Wishlist";
import {useSelector} from "react-redux";
import Loader from "../../../widgets/Loader";
import AppButton, {AppButtonTheme} from "../../../shared/ui/AppButton/AppButton";

const WishlistPage = () => {
  const data = useSelector(getWishlistData)
  const error = useSelector(getWishlistError)
  const isLoading = useSelector(getWishlistIsLoading)

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
    <Page className={classes.WishlistPage}>
      <AppContainer>
        <AppButton
          theme={AppButtonTheme.DARK}
          onClick={() => {
            if (!data)
              return

            fetch('http://localhost:8000/products-info', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ids: data.productsIds
              }),
            })
              .then(response => response.json())
              .then(data => console.log(data))
              .catch((error) => {
                console.error('Error:', error);
              });

          }}
        >
          aboba
        </AppButton>
      </AppContainer>
    </Page>
  );
};

export default memo(WishlistPage);