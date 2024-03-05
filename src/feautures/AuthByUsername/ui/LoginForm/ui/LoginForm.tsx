import classes from './LoginForm.module.scss';
import AppButton from "shared/ui/AppButton/AppButton";
import {useSelector} from "react-redux";
import {useCallback, ChangeEvent, FC, memo} from "react";
import {loginActions, loginReducer} from "../../../model/slice/loginSlice";
import {loginByUsername} from "../../../model/services/loginByUsername";
import classNames from "classnames";
import {getLoginUsername} from "../../../model/selectors/getLoginUsername";
import {getLoginPassword} from "../../../model/selectors/getLoginPassword";
import {getLoginError} from "../../../model/selectors/getLoginError";
import {getLoginIsLoading} from "../../../model/selectors/getLoginIsLoading";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
}

const LoginForm: FC<LoginFormProps> = memo((props) => {
  const {
    className,
    onSuccess
  } = props;
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const dispatch = useAppDispatch();

  const onChangeUsername = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setUsername(event.target.value));
  }, [dispatch]);

  const onChangePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setPassword(event.target.value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({username, password}))
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
    }
  }, [onSuccess, dispatch, username, password]);

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
    >
      <div className={classNames(className, classes.LoginForm)}>

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
    </DynamicModuleLoader>
  );
});

export default LoginForm;