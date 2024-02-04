import React from 'react';
import classNames from "classnames";
import AppLink from "shared/ui/AppLink/AppLink";
import classes from './FooterInfo.module.scss';

interface FooterInfoProps {
  className?: string
}

const FooterInfo = ({className}: FooterInfoProps) => {
  return (
    <div className={classNames(className)}>
      <div className={classes.Info}>
        <AppLink to={"/"}>
          <p className={classes.Logo}>
            LM
          </p>
        </AppLink>

        <p className={classes.Address}>
          г. Анапа, Анапское шоссе, 30 Ж/К Черное море
        </p>
      </div>
    </div>
  );
};

export default FooterInfo;