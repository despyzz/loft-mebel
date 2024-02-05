import React from 'react';
import classNames from "classnames";
import classes from './FooterInfo.module.scss';
import Logo from "shared/ui/Logo";

interface FooterInfoProps {
  className?: string
}

const FooterInfo = ({className}: FooterInfoProps) => {
  return (
    <div className={classNames(className)}>
      <div className={classes.Info}>
        <Logo className={classes.Logo} />

        <p className={classes.Address}>
          г. Анапа, Анапское шоссе, 30 Ж/К Черное море
        </p>
      </div>
    </div>
  );
};

export default FooterInfo;