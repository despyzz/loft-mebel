import classes from "./ProductListItem.module.scss";
import AppButton from "shared/ui/AppButton/AppButton";
import {memo, MouseEvent, useCallback, useEffect, useState} from "react";
import {Product} from "../../model/types/product";
import Loader from "widgets/Loader";
import AppLink from "shared/ui/AppLink/AppLink";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {addToWishlist, getWishlistData, removeFromWishlist} from "entities/Wishlist";
import {useSelector} from "react-redux";
import {addToCart, getCartData, removeFromCart} from "entities/Cart";
import {getUserAuthData} from "entities/User";
import {LoginModal} from "feautures/AuthByUsername";

interface ProductCardProps {
  className?: string;
  product: Product;
  isLoading?: boolean;
}

const ProductListItem = memo((props: ProductCardProps) => {
  const {
    className,
    product,
    isLoading
  } = props;

  const [isAuthModal, setIsAuthModal] = useState(false);
  const closeAuthModal = () => setIsAuthModal(false);
  const openAuthModal = () => setIsAuthModal(true);

  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const wishlist = useSelector(getWishlistData);
  const cart = useSelector(getCartData);

  const authData = useSelector(getUserAuthData);

  const dispatch = useAppDispatch()

  const onAddToWishlist = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (addedToWishlist) {
      dispatch(removeFromWishlist(product.id))
      setAddedToWishlist(false)
    } else {
      dispatch(addToWishlist(product.id))
      setAddedToWishlist(true)
    }
  }, [dispatch, product.id, addedToWishlist])

  const onAddToCart = useCallback(() => {
    if (addedToCart) {
      dispatch(removeFromCart(product.id))
      setAddedToCart(false)
    } else {
      dispatch(addToCart(product.id))
      setAddedToCart(true)
    }
  }, [dispatch, product.id, addedToCart])

  useEffect(() => {
    if (wishlist) {
      setAddedToWishlist(wishlist.productsIds.includes(product.id))
    }
    if (cart) {
      setAddedToCart(cart.productsIds.includes(product.id))
    }
  }, [wishlist, cart, product.id]);

  if (isLoading) {
    return (
      <div className={className}>
        <div className={classes.ProductCard}>
          <div className={classes.Content}>
            <Loader/>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {
        !authData && <LoginModal
          isOpen={isAuthModal}
          onClose={closeAuthModal}
        />
      }
      <AppLink className={className} to={`/product/${product.id}`}>
        <div className={classes.ProductCard}>
          <div className={classes.Content}>

            <AppButton
              className={classes.AddToWishlist}
              onClick={(event) => {
                event.preventDefault()
                if (authData)
                  onAddToWishlist(event);
                else
                  openAuthModal()
              }}
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

            </AppButton>

            <div className={classes.PhotoWrapper}>
              <img className={classes.Photo} src={product.photos[0] || ""} alt={`Фотография товара: ${product.name}`}/>
            </div>

            <div className={classes.Name}>
              {product.name}
            </div>

            <div className={classes.Category}>
              {product.category?.name}
            </div>

            <div className={classes.Price}>
              {product.price} ₽
            </div>

            <div className={classes.Hidden}>
              <div className={classes.Block}>
                <AppButton
                  className={classes.AddToCartBtn}
                  onClick={(event) => {
                    event.preventDefault()
                    if (authData)
                      onAddToCart()
                    else
                      openAuthModal()
                  }}
                >
                  {addedToCart ? "Удалить из корзины" : "Добавить в корзину"}
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </AppLink>
    </>
  );
});

export {ProductListItem};