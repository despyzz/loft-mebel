import React, {ButtonHTMLAttributes, FC} from 'react';
import classNames from "classnames";
import classes from './AppButton.module.scss';

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
}

const AppButton: FC<AppButtonProps> = (props: AppButtonProps) => {
  const {
    className,
    children,
    disabled,
    ...other
  } = props;

  const mods: Record<string, boolean | undefined> = {
    [classes.Disabled]: disabled,
  }

  return (
    <button
      className={classNames(className, classes.Button, mods)}
      {...other}
    >
      {children}
    </button>
  );
};

export default AppButton;