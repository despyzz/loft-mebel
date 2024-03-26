import React, {memo, MouseEvent, useCallback, useEffect, useState} from 'react';
import classes from './Info.module.scss';
import {ReactComponent as Rating} from 'shared/assets/Rating.svg';
import AppButton, {AppButtonTheme} from "shared/ui/AppButton/AppButton";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {addToWishlist, getWishlistData, removeFromWishlist} from "entities/Wishlist";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {addToCart, getCartData, removeFromCart} from "entities/Cart";
import {Product} from "../../model/types/product";
import {LoginModal} from "../../../../feautures/AuthByUsername";
import {getUserAuthData} from "../../../User";

interface InfoProps {
  className: string,
  data: Product
}

const Info = memo((props: InfoProps) => {
  const {
    className,
    data: {
      id,
      rating,
      name,
      category,
      description,
      price
    }
  } = props;

  const [isAuthModal, setIsAuthModal] = useState(false);
  const closeAuthModal = () => setIsAuthModal(false);
  const openAuthModal = () => setIsAuthModal(true);

  const authData = useSelector(getUserAuthData);

  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const wishlist = useSelector(getWishlistData);
  const cart = useSelector(getCartData);

  const dispatch = useAppDispatch()

  const onAddToWishlist = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (addedToWishlist) {
      dispatch(removeFromWishlist(id))
      setAddedToWishlist(false)
    } else {
      dispatch(addToWishlist(id))
      setAddedToWishlist(true)
    }
  }, [dispatch, id, addedToWishlist])

  const onAddToCart = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (addedToCart) {
      dispatch(removeFromCart(id))
      setAddedToCart(false)
    } else {
      dispatch(addToCart(id))
      setAddedToCart(true)
    }
  }, [dispatch, id, addedToCart])

  useEffect(() => {
    if (wishlist) {
      setAddedToWishlist(wishlist.productsIds.includes(id))
    }
    if (cart) {
      setAddedToCart(cart.productsIds.includes(id))
    }
  }, [wishlist, cart, id]);


  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating && i < rating) {
      stars.push(<Rating key={i} className={classes.Star} fill="black"/>)
    } else {
      stars.push(<Rating key={i} className={classes.Star} fill="#D1D1D1"/>)
    }
  }

  return (
    <div className={classNames(className, classes.Info)}>

      {
        !authData && <LoginModal
          isOpen={isAuthModal}
          onClose={closeAuthModal}
        />
      }

      <div className={classes.Rating}>
        {stars}
      </div>

      <div className={classes.Group1}>
        <h1 className={classes.Name}>
          {name}
        </h1>

        <h2 className={classes.Category}>
          {category?.name}
        </h2>
      </div>

      <div className={classes.Group2}>
        <h2 className={classes.Price}>
          {price} ₽
        </h2>

        <AppButton
          className={classes.BuyButton} theme={AppButtonTheme.DARK}
          onClick={authData ? onAddToCart : openAuthModal}
        >
          {
            addedToCart ? <p>Удалить</p> : <p>Купить</p>
          }
        </AppButton>

        <AppButton
          className={classNames(classes.AddToWishlistButton)}
          onClick={authData ? onAddToWishlist : openAuthModal}
        >
          <svg
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill={addedToWishlist ? 'black' : 'none'}
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.467 9.55034L10.9167 18L19.3663 9.55034C20.3056 8.61103 20.8333 7.33706 20.8333 6.00867C20.8333 3.24246 18.5909 1 15.8247 1C14.4963 1 13.2223 1.5277 12.283 2.46701L10.9167 3.83333L9.55034 2.46701C8.61103 1.5277 7.33706 1 6.00867 1C3.24246 1 1 3.24246 1 6.00867C1 7.33706 1.5277 8.61103 2.467 9.55034Z"
              stroke="black"
            />
          </svg>
          {
            addedToWishlist ? <p>Убрать из желаемого</p> : <p>Добавить в желаемое</p>
          }
        </AppButton>
      </div>

      <div className={classes.Description}>
        <div className={classes.Title}>
          Описание
        </div>

        <div className={classes.Content}>
          {
            description?.map((p, i) => (
              <p className={classes.Paragraph} key={i}>
                {p}
              </p>
            ))
          }
        </div>
      </div>

    </div>
  );
});

export default Info;