import React from 'react';
import classNames from "classnames";
import classes from "./Promo.module.scss";
import {Slider} from "shared/ui/Slider";

import Slide2 from "shared/assets/promo/Slide2.jpg";
import Slide3 from "shared/assets/promo/Slide3.jpg";
import AppLink from "shared/ui/AppLink/AppLink";

interface PromoProps {
  className?: string
}

const Promo = ({className}: PromoProps) => {
  return (
    <div className={classNames(className, classes.Promo)}>
      <Slider>
        <div className={classes.Slide}>

          <img className={classes.SlideImg}
               src={Slide2}
               alt=""
          />

          <div className={classes.SlideContent}>
            <h1 className={classes.Title}>
              Современная и удобная мебель
            </h1>
            <AppLink className={classes.Catalog} to={"/"}>
              Смотреть каталог
            </AppLink>
          </div>

        </div>

        <div className={classes.Slide}>

          <img className={classes.SlideImg}
               src={Slide3}
               alt=""
          />

          <div className={classes.SlideContent}>
            <h1 className={classes.Title}>
              Современная и удобная мебель
            </h1>
            <AppLink className={classes.Catalog} to={"/"}>
              Смотреть каталог
            </AppLink>
          </div>

        </div>
      </Slider>
    </div>
  );
};

export {Promo};