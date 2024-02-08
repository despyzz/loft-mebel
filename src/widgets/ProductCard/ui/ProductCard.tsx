import classes from "./ProductCard.module.scss";
import ProductPhoto from "shared/assets/products/Product1.jpg";
import AppButton from "shared/ui/AppButton/AppButton";
import WishlistIcon from "shared/assets/WishlistIcon.svg"

interface ProductCardProps {
  className?: string;
}

const ProductCard = ({className}: ProductCardProps) => {
  return (
    <div className={className}>

      <div className={classes.ProductCard}>

        <div className={classes.Content}>
          <AppButton className={classes.AddToWishlist}>
            <img src={WishlistIcon} alt="Add to wishlist."/>
          </AppButton>

          <div className={classes.PhotoWrapper}>
            <img className={classes.Photo} src={ProductPhoto} alt=""/>
          </div>

          <div className={classes.Name}>
            Валенсия Beige
          </div>

          <div className={classes.Category}>
            Барные стулья
          </div>

          <div className={classes.Price}>
            2 300₽
          </div>

          <div className={classes.Hidden}>

            <div className={classes.Block}>
              <div className={classes.BlockName}>
                Размеры
              </div>

              <div className={classes.Sizes}>
                <div className={classes.Width}>
                  43см
                </div>

                <div className={classes.SizesSeparator}/>

                <div className={classes.Depth}>
                  77см
                </div>

                <div className={classes.SizesSeparator}/>

                <div className={classes.Height}>
                  77см
                </div>
              </div>
            </div>

            <div className={classes.Block}>
              <AppButton className={classes.AddToCartBtn}>
                Добавить в корзину
              </AppButton>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export {ProductCard};