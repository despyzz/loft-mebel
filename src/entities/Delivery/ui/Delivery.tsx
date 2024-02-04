import React from 'react';
import classNames from "classnames";
import DeliveryIcon from 'shared/assets/DeliveryIcon.svg';
import classes from './Delivery.module.scss';
import AppLink from "../../../shared/ui/AppLink/AppLink";

interface DeliveryProps {
  className?: string
}

const Delivery = ({className}: DeliveryProps) => {
  return (
    <div className={classNames(className)}>
      <AppLink className={classes.Delivery} to="/delivery">
        <img src={DeliveryIcon} alt="Delivery car."/>
        <div className={classes.Text}>
          Доставка
        </div>
      </AppLink>
    </div>
  );
};

export default Delivery;