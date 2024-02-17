import classes from './Orders.module.scss';

import Photo from 'shared/assets/products/Product2.jpg';
import AppButton from "shared/ui/AppButton/AppButton";
import classNames from "classnames";
import {FC} from "react";

interface OrdersProps {
  className?: string
}

const Orders: FC<OrdersProps> = (props) => {
  const {className} = props;
  return (
    <div className={classNames(classes.Orders, className)}>
      <h2 className={classes.Title}>
        Мои заказы
      </h2>
      <div className={classes.List}>
        <div className={classNames(classes.Item, classes.Header)}>
          <div className={classes.HeaderItem}>
            Товар
          </div>
          <div className={classes.HeaderItem}>
            Цена
          </div>
          <div className={classes.HeaderItem}>
            Дата
          </div>
          <div className={classes.HeaderItem}>
            Статус
          </div>
        </div>

        <div className={classes.Item}>
          <div className={classes.Group}>
            <div className={classes.PhotoWrapper}>
              <img src={Photo} alt=""/>
            </div>
            <div className={classes.Name}>
              Кускен Navy Blue
            </div>
          </div>

          <div className={classes.Price}>
            16990
          </div>

          <div className={classes.Date}>
            01.05.2020
          </div>

          <div className={classes.Status}>
            Ожидается
          </div>
        </div>
        <div className={classes.Item}>
          <div className={classes.Group}>
            <div className={classes.PhotoWrapper}>
              <img src={Photo} alt=""/>
            </div>
            <div className={classes.Name}>
              Кускен Navy Blue
            </div>
          </div>

          <div className={classes.Price}>
            16990
          </div>

          <div className={classes.Date}>
            01.05.2020
          </div>

          <div className={classes.Status}>
            Ожидается
          </div>
        </div>

      </div>
      <AppButton className={classes.ViewAll}>
        Смотреть все
      </AppButton>
    </div>
  );
};

export default Orders;