import React from 'react';
import classNames from "classnames";
import classes from "./Promo.module.scss";

import Slide2 from "shared/assets/promo/Slide2.jpg";
import AppLink from "shared/ui/AppLink/AppLink";
import AppContainer from "shared/ui/AppContainer/AppContainer";

interface PromoProps {
  className?: string
}

const Promo = ({className}: PromoProps) => {
  return (
    <div className={classNames(className, classes.Promo)}>
      {/*<Slider>*/}
      <AppContainer className={classes.Container}>
        <div className={classes.Slide}>

          <img className={classes.SlideImg}
               src={Slide2}
               alt=""
          />

          <div className={classes.SlideContent}>
            <h1 className={classes.Title}>
              Современная и удобная мебель
            </h1>
            <AppLink className={classes.Catalog} to={"/catalog"}>
              Смотреть каталог
            </AppLink>
          </div>

        </div>
      </AppContainer>

      {/*<div className={classes.Slide}>*/}

      {/*  <img className={classes.SlideImg}*/}
      {/*       src={Slide3}*/}
      {/*       alt=""*/}
      {/*  />*/}

      {/*  <div className={classes.SlideContent}>*/}
      {/*    <h1 className={classes.Title}>*/}
      {/*      Современная и удобная мебель*/}
      {/*    </h1>*/}
      {/*    <AppLink className={classes.Catalog} to={"/catalog"}>*/}
      {/*      Смотреть каталог*/}
        {/*    </AppLink>*/}
        {/*  </div>*/}

        {/*</div>*/}
      {/*</Slider>*/}
    </div>
  );
};

export {Promo};