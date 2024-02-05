import React from 'react';
import classNames from "classnames";
import classes from './AppContainer.module.scss';

interface AppContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const AppContainer = (props: AppContainerProps) => {
  const {
    className,
    children,
    ...other
  } = props;
  return (
    <div className={classNames(className, classes.Container)} {...other}>
      {children}
    </div>
  );
};

export default AppContainer;