import classes from './CartSection.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import CloseIcon from 'shared/assets/CloseIcon.svg';
import AppButton from "shared/ui/AppButton/AppButton";

const CartSection = () => {
  const count = 999;

  return (
    <AppContainer>

      <section className={classes.CartSection}>
        <div className={classes.Header}>

          <h1 className={classes.Title}>
            Ваша корзина
          </h1>

          <div className={classes.Count}>
            Количество: {count}
          </div>

        </div>

        <div className={classes.Products}>
          <div className={classes.Product}>
            <div className={classes.PhotoWrapper}>
              <img className={classes.Photo} alt=""/>
            </div>

            <div className={classes.Title}>
              Кускен Navy Blue
            </div>

            <div className={classes.ProductCount}>
              1
            </div>

            <div className={classes.Price}>
              16 990₽
            </div>

            <div className={classes.Color}>
              <div className={classes.ColorName}>Темно-синий</div>
              <div
                className={classes.ColorSquare}
                style={{background: "#353e4d"}}
              />
            </div>

            <div className={classes.Sizes}>
              218 СМ × 95 СМ × 90 СМ
            </div>

            <div className={classes.RemoveButton}>
              <img src={CloseIcon} alt=""/>
            </div>
          </div>

          <div className={classes.Product}>
            <div className={classes.PhotoWrapper}>
              <img className={classes.Photo} alt=""/>
            </div>

            <div className={classes.Title}>
              Кускен Navy Blue
            </div>

            <div className={classes.ProductCount}>
              1
            </div>

            <div className={classes.Price}>
              16 990₽
            </div>

            <div className={classes.Color}>
              <div className={classes.ColorName}>Темно-синий</div>
              <div
                className={classes.ColorSquare}
                style={{background: "#353e4d"}}
              />
            </div>

            <div className={classes.Sizes}>
              218 СМ × 95 СМ × 90 СМ
            </div>

            <div className={classes.RemoveButton}>
              <img src={CloseIcon} alt=""/>
            </div>
          </div>
        </div>

        <div className={classes.Footer}>
          <div className={classes.FinalPrice}>
            69 960₽
          </div>
          <AppButton className={classes.CheckoutButton}>
            Оформить заказ
          </AppButton>
        </div>

      </section>
    </AppContainer>
  );
};

export default CartSection;