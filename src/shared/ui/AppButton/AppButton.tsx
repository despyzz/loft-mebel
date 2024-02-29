import React, {ButtonHTMLAttributes, FC, memo} from 'react';
import classNames from "classnames";
import classes from './AppButton.module.scss';

export enum AppButtonTheme {
  CLEAR,
  DARK
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  theme?: AppButtonTheme
}

const AppButton: FC<AppButtonProps> = (props: AppButtonProps) => {
  const {
    className,
    children,
    disabled,
    theme,
    ...other
  } = props;

  const mods: Record<string, boolean | undefined> = {
    [classes.Disabled]: disabled,
  }

  let themeClass;
  switch (theme) {

    case AppButtonTheme.CLEAR:
      themeClass = classes.Clear
      break

    case AppButtonTheme.DARK:
      themeClass = classes.Dark
      break

    default:
      themeClass = classes.Clear
      break
  }

  return (
    <button
      className={classNames(className, classes.Button, themeClass, mods)}
      {...other}
    >
      {children}
    </button>
  );
};

export default memo(AppButton);