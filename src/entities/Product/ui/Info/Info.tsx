import React, {memo} from 'react';
import classes from './Info.module.scss';
import {Category} from "../../../Category";
import {ReactComponent as Rating} from '../../../../shared/assets/Rating.svg';
import WishlistIcon from '../../../../shared/assets/WishlistIcon.svg';
import AppButton, {AppButtonTheme} from "../../../../shared/ui/AppButton/AppButton";
import classNames from "classnames";

interface InfoProps {
  className?: string;
  rating?: number;
  name?: string;
  category?: Category;
  price?: number;
  description?: string[];
}

const Info = memo((props: InfoProps) => {
  const {
    className,
    rating,
    name,
    category,
    price,
    description
  } = props;

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
          {price}₽
        </h2>

        <AppButton className={classes.BuyButton} theme={AppButtonTheme.DARK}>
          Купить
        </AppButton>

        <AppButton className={classes.AddToWishlistButton}>
          <img src={WishlistIcon} alt=""/>
          <p>Добавить в желаемое</p>
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