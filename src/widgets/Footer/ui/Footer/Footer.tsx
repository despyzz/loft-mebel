import React from 'react';
import classNames from "classnames";
import classes from "./Footer.module.scss";
import AppContainer from "../../../../shared/ui/AppContainer/AppContainer";
import FooterNav from "../FooterNav";
import FooterInfo from "../FooterInfo";
import FooterLinks from "../FooterLinks";
import FooterSocial from "../FooterSocial";


interface FooterProps {
  className?: string
}

const Footer = ({className}: FooterProps) => {
  return (
    <AppContainer className={classNames(classes.FooterContainer, className)}>
      <footer className={classes.Footer}>
        <div>
          <FooterNav className={classes.Nav} />
          <FooterInfo className={classes.Info} />
        </div>

        <div>
          <FooterLinks className={classes.Links} />
          <FooterSocial />
        </div>
      </footer>
    </AppContainer>
  );
};

export default Footer;