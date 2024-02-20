import classes from './LoginForm.module.scss';
import AppButton from "shared/ui/AppButton/AppButton";

const LoginForm = () => {
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
        />
      </label>

      <label className={classes.Label}>
        <input
          className={classes.Input}
          type="password"
          placeholder="Пароль"
        />
      </label>

      <AppButton className={classes.LoginBtn}>
        Войти
      </AppButton>
    </div>
  );
};

export default LoginForm;