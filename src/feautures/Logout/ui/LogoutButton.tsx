import React, {useCallback} from 'react';
import AppButton, {AppButtonTheme} from "shared/ui/AppButton/AppButton";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getUserAuthData, userActions} from "entities/User";
import {useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import classNames from "classnames";
import classes from './LogoutButton.module.scss';

interface LogoutButtonProps {
  className?: string
  redirect?: string
}

const LogoutButton = (props: LogoutButtonProps) => {
  const {
    className,
    redirect= '/'
  } = props

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });

    dispatch(userActions.logout())
    navigate(redirect)
  }, [dispatch, navigate, redirect])


  return (
    authData
      ?
      <AppButton
        className={classNames(className, classes.LogoutButton)}
        theme={AppButtonTheme.DARK}
        onClick={onLogout}
      >
        Выйти из профиля
      </AppButton>
      :
      null
  );
};

export default LogoutButton;