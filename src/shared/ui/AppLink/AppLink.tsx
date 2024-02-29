import React, {FC, memo} from 'react';
import {Link, LinkProps} from "react-router-dom";
import classes from "./AppLink.module.scss";
import classNames from "classnames";

enum AppLinkTheme {
  UNDERLINE,
  CLEAR
}

interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: AppLinkTheme,
}

const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    theme,
    ...other
  } = props;

  let themeClass;
  switch (theme) {
    case AppLinkTheme.CLEAR:
      themeClass = classes.Clear;
      break;

    case AppLinkTheme.UNDERLINE:
      themeClass = classes.Underline;
      break;

    default:
      themeClass = classes.Clear;
  }

  return (
    <Link to={to} className={classNames(className, themeClass, classes.Link)} {...other}>
      {children}
    </Link>
  );
};

export default memo(AppLink);