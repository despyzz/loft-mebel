import classes from './CartSection.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import CloseIcon from 'shared/assets/CloseIcon.svg';
import AppButton from "shared/ui/AppButton/AppButton";
import {Product} from "entities/Product";
import {useEffect, useState} from "react";
import {$api} from "shared/api/api";
import {useSelector} from "react-redux";
import {emptyCart, getCartData, removeFromCart} from "entities/Cart";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import AppLink from "shared/ui/AppLink/AppLink";

const CartSection = () => {
  const data = useSelector(getCartData)
  const dispatch = useAppDispatch()

  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    if (data)
      $api.post('/products-info', {
        ids: data.productsIds
      })
        .then(response => response.data)
        .then(setProducts)
        .catch(error => console.log(error))
  }, [data]);

  return (
    <AppContainer>

      <section className={classes.CartSection}>
        <div className={classes.Header}>

          <h1 className={classes.Title}>
            Ваша корзина
          </h1>

          <div className={classes.Count}>
            Количество: {products.length}
          </div>

        </div>

        <div className={classes.Products}>
          {
            products.map(product => (
              <div key={product.id} className={classes.Product}>
                <div className={classes.PhotoWrapper}>
                  <img className={classes.Photo} alt="" src={product.photos[0]}/>
                </div>

                <AppLink
                  to={`/product/${product.id}`}
                  className={classes.Title}
                >
                  {product.name}
                </AppLink>

                <div className={classes.ProductCount}>
                  -
                </div>

                <div className={classes.Price}>
                  {product.price}₽
                </div>

                <div className={classes.Color}>
                  {/*<div className={classes.ColorName}>Темно-синий</div>*/}
                  {/*<div*/}
                  {/*  className={classes.ColorSquare}*/}
                  {/*  style={{background: "#353e4d"}}*/}
                  {/*/>*/}
                </div>

                <div className={classes.Sizes}>
                  {/*218 СМ × 95 СМ × 90 СМ*/}
                  -
                </div>

                <AppButton
                  className={classes.RemoveButton}
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  <img src={CloseIcon} alt=""/>
                </AppButton>
              </div>
            ))
          }
        </div>

        <div className={classes.Footer}>
          <div className={classes.FinalPrice}>
            {products.reduce((acc, cur) => acc + cur.price, 0)} ₽
          </div>
          <AppButton
            className={classes.CheckoutButton}
            onClick={() => dispatch(emptyCart())}
          >
            Оформить заказ
          </AppButton>
        </div>

      </section>
    </AppContainer>
  );
};

export default CartSection;