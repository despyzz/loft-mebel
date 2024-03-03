import React, {memo} from 'react';
import classes from './WishlistPage.module.scss';
import {Page} from "widgets/Page";
import AppContainer from "shared/ui/AppContainer/AppContainer";

const WishlistPage = () => {
  return (
    <Page className={classes.WishlistPage}>
      <AppContainer>
        wishlist)
      </AppContainer>
    </Page>
  );
};

export default memo(WishlistPage);