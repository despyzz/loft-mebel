import classes from "./ProductListItem.module.scss";
import AppButton from "shared/ui/AppButton/AppButton";
import WishlistIcon from "shared/assets/WishlistIcon.svg"
import {memo, MouseEvent, useCallback, useEffect, useState} from "react";
import {Product} from "../../model/types/product";
import Loader from "widgets/Loader";
import AppLink from "shared/ui/AppLink/AppLink";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {addToWishlist, getWishlistData, removeFromWishlist} from "entities/Wishlist";
import {useSelector} from "react-redux";
import classNames from "classnames";

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

  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const wishlist = useSelector(getWishlistData);

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

  const onAddToCart = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('cart');
  }, [])

  useEffect(() => {
    if (wishlist) {
      setAddedToWishlist(wishlist.productsIds.includes(product.id))
    }
  }, [wishlist, product.id]);

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
    <AppLink className={className} to={`/product/${product.id}`}>
      <div className={classes.ProductCard}>
        <div className={classes.Content}>

          <AppButton
            className={classNames(classes.AddToWishlist, addedToWishlist && classes.ActiveWishlist)}
            onClick={onAddToWishlist}
          >
            <img src={WishlistIcon} alt="Add to wishlist."/>
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
                onClick={onAddToCart}
              >
                Добавить в корзину
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </AppLink>
  );
});

export {ProductListItem};