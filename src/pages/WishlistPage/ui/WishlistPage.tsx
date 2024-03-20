import React, {memo, useEffect} from 'react';
import classes from './WishlistPage.module.scss';
import {Page} from "widgets/Page";
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {DynamicModuleLoader} from "../../../shared/lib/components/DynamicModuleLoader";
import {ReducerList} from "../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {wishlistReducer} from "../../../entities/Wishlist";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchWishlist} from "../../../entities/Wishlist/model/services/fetchWishlist";
import {useSelector} from "react-redux";
import {getUserAuthData, userReducer} from "../../../entities/User";
// import {
//   getWishlistData,
//   getWishlistError,
//   getWishlistIsLoading
// } from "../../../entities/Wishlist/model/selectors/wishlistSelectors";

const reducers: ReducerList = {
  wishlist: wishlistReducer,
  user: userReducer
}

const WishlistPage = () => {
  const authData = useSelector(getUserAuthData)
  const userId = authData?.id;

  const dispatch = useAppDispatch();

  // const data = useSelector(getWishlistData)
  // const error = useSelector(getWishlistError)
  // const isLoading = useSelector(getWishlistIsLoading)

  useEffect(() => {
    if (userId)
      dispatch(fetchWishlist(userId))
  }, [dispatch, userId]);

  return (
    <Page className={classes.WishlistPage}>
      <DynamicModuleLoader reducers={reducers}>
        <AppContainer>
          wishlist)
        </AppContainer>
      </DynamicModuleLoader>
    </Page>
  );
};

export default memo(WishlistPage);