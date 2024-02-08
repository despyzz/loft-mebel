import React from 'react';
import classNames from "classnames";
import AppLink from "../../../../../shared/ui/AppLink/AppLink";
import classes from "./FooterLinks.module.scss";

interface FooterLinksProps {
  className?: string
}

const FooterLinks = ({className}: FooterLinksProps) => {
  return (
    <div className={classNames(className)}>
      <div className={classes.Links}>
        <AppLink className={classes.Link} to={"/"}>
          Акция
        </AppLink>

        <AppLink className={classes.Link} to={"/"}>
          Новинки
        </AppLink>
      </div>
    </div>
  );
};

export default FooterLinks;