import classes from './LoginForm.module.scss';
import AppButton from "shared/ui/AppButton/AppButton";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, ChangeEvent} from "react";
import {loginActions} from "../../../model/slice/loginSlice";
import {getLoginState} from "../../../model/selectors/getLoginState";
import {loginByUsername} from "../../../model/services/loginByUsername";

const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    username,
    password,
    error,
    isLoading
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setUsername(event.target.value));
  }, [dispatch]);

  const onChangePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setPassword(event.target.value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    if (!isLoading) {
      // this is supposed to be a bug
      // @ts-ignore
      dispatch(loginByUsername({username, password}))
    }
  }, [dispatch, username, password, isLoading]);

  return (
    <div className={classes.LoginForm}>

      <div className={classes.Title}>
        Войти на сайт
      </div>

      <label className={classes.Label}>
        <input
          className={classes.Input}
          type="text"
          placeholder="Имя пользователя"
          onChange={onChangeUsername}
          value={username}
        />
      </label>

      <label className={classes.Label}>
        <input
          className={classes.Input}
          type="password"
          placeholder="Пароль"
          onChange={onChangePassword}
          value={password}
        />
      </label>


      {
        error && <div>
          {error}
        </div>
      }

      <AppButton
        className={classes.LoginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        Войти
      </AppButton>
    </div>
  );
};

export default LoginForm;