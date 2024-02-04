import React from 'react';
import classNames from "classnames";
import classes from "./Footer.module.scss";
import AppContainer from "shared/ui/AppContainer/AppContainer";

import FooterNav from "entities/FooterNav";
import Social from "entities/Social";
import FooterLinks from "entities/FooterLinks";
import FooterInfo from "entities/FooterInfo";

interface FooterProps {
  className?: string
}

const Footer = ({className}: FooterProps) => {
  return (
    <AppContainer className={classes.FooterContainer}>
      <footer className={classNames(className, classes.Footer)}>
        <div>
          <FooterNav className={classes.Nav} />
          <FooterInfo className={classes.Info} />
        </div>

        <div>
          <FooterLinks className={classes.Links} />
          <Social />
        </div>
      </footer>
    </AppContainer>
  );
};

export default Footer;