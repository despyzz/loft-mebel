import classes from "./ProductListItem.module.scss";
import AppButton from "shared/ui/AppButton/AppButton";
import WishlistIcon from "shared/assets/WishlistIcon.svg"
import {memo, MouseEvent, useCallback} from "react";
import {Product} from "../../model/types/product";
import Loader from "widgets/Loader";
import AppLink from "shared/ui/AppLink/AppLink";

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

  const productId = product.id;
  const name = product.name;
  const photo = product.photos[0] || "";
  const category = "категория";
  const price = product.price;
  const {width, depth, height} = product.sizes;

  const onAddToWishlist = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('wishlist');
  }, [])

  const onAddToCart = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('cart');
  }, [])

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
    <AppLink className={className} to={`/product/${productId}`}>
      <div className={classes.ProductCard}>
        <div className={classes.Content}>

          <AppButton
            className={classes.AddToWishlist}
            onClick={onAddToWishlist}
          >
            <img src={WishlistIcon} alt="Add to wishlist."/>
          </AppButton>

          <div className={classes.PhotoWrapper}>
            <img className={classes.Photo} src={photo} alt={`Фотография товара: ${name}`}/>
          </div>

          <div className={classes.Name}>
            {name}
          </div>

          <div className={classes.Category}>
            {category}
          </div>

          <div className={classes.Price}>
            {price}₽
          </div>

          <div className={classes.Hidden}>

            <div className={classes.Block}>
              <div className={classes.BlockName}>
                Размеры
              </div>

              <div className={classes.Sizes}>
                <div className={classes.Width}>
                  {width}см
                </div>

                <div className={classes.SizesSeparator}/>

                <div className={classes.Depth}>
                  {depth}см
                </div>

                <div className={classes.SizesSeparator}/>

                <div className={classes.Height}>
                  {height}см
                </div>
              </div>
            </div>

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