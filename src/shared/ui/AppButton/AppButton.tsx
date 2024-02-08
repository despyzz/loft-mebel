import React, {ButtonHTMLAttributes, FC} from 'react';
import classNames from "classnames";
import classes from './AppButton.module.scss';

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const AppButton: FC<AppButtonProps> = (props: AppButtonProps) => {
  const {
    className,
    children,
    ...other
  } = props;
  
  return (
    <button
      className={classNames(className, classes.Button)}
      {...other}
    >
      {children}
    </button>
  );
};

export default AppButton;