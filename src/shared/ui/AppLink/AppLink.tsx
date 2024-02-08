import React, {FC} from 'react';
import {Link, LinkProps} from "react-router-dom";
import classes from "./AppLink.module.scss";
import classNames from "classnames";

interface AppLinkProps extends LinkProps {
  className?: string
}

const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
  const {to, className, children, ...other} = props;
  return (
    <Link to={to} className={classNames(className, classes.Link)} {...other}>
      {children}
    </Link>
  );
};

export default AppLink;