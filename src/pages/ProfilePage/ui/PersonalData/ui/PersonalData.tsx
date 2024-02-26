import classNames from "classnames";
import {ChangeEventHandler, FC, useCallback} from "react";
import {useSelector} from "react-redux";
import {
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  updateProfileData,
  profileActions
} from "entities/Profile";
import AppButton from "shared/ui/AppButton/AppButton";
import classes from './PersonalData.module.scss';
import Loader from "widgets/Loader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface PersonalDataProps {
  className?: string
}

const PersonalData: FC<PersonalDataProps> = (props) => {
  const {
    className,
  } = props;

  const dispatch = useAppDispatch();

  // const data = useSelector(getProfileData);
  const form = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);

  // change readonly

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  // change inputs

  const onChangeName: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const value = event.target.value;
    dispatch(profileActions.updateProfile({
      name: value
    }))
  }, [dispatch]);

  const onChangeSurname: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const value = event.target.value;
    dispatch(profileActions.updateProfile({
      surname: value
    }))
  }, [dispatch]);

  const onChangePhone: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const value = event.target.value;
    dispatch(profileActions.updateProfile({
      phone: value
    }))
  }, [dispatch]);

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const value = event.target.value;
    dispatch(profileActions.updateProfile({
      email: value
    }))
  }, [dispatch]);

  const onChangeCity: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const value = event.target.value;
    dispatch(profileActions.updateProfile({
      city: value
    }))
  }, [dispatch]);

  const onChangeStreet: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const value = event.target.value;
    dispatch(profileActions.updateProfile({
      street: value
    }))
  }, [dispatch]);

  const onChangeBuilding: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const value = event.target.value;
    dispatch(profileActions.updateProfile({
      building: value
    }))
  }, [dispatch]);

  const onChangeApartment: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const value = event.target.value;
    dispatch(profileActions.updateProfile({
      apartment: value
    }))
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={classNames(classes.PersonalData, className)}>
        <Loader/>
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(classes.PersonalData, className)}>
        <h1>Произошла ошибка при загрузке данных профиля</h1>
      </div>
    );
  }

  return (
    <div className={classNames(classes.PersonalData, className)}>
      <h2 className={classes.Title}>
        Личные данные
      </h2>

      <div className={classes.Group}>
        <label className={classNames(classes.Label, classes.Name)}>
          <p className={classes.InputTitle}>
            Имя
          </p>
          <input
            className={classes.Input}
            value={form?.name}
            placeholder="Ваше имя"
            readOnly={readonly}
            onChange={onChangeName}
          />
        </label>

        <label className={classNames(classes.Label, classes.Surname)}>
          <p className={classes.InputTitle}>
            Фамилия
          </p>
          <input
            className={classes.Input}
            value={form?.surname}
            placeholder="Ваша фамилия"
            readOnly={readonly}
            onChange={onChangeSurname}
          />
        </label>

        <label className={classNames(classes.Label, classes.Phone)}>
          <p className={classes.InputTitle}>
            Номер телефона
          </p>
          <input
            className={classes.Input}
            value={form?.phone}
            placeholder="Ваш телефон"
            readOnly={readonly}
            onChange={onChangePhone}
          />
        </label>

        <label className={classNames(classes.Label, classes.Email)}>
          <p className={classes.InputTitle}>
            E-mail
          </p>
          <input
            className={classes.Input}
            value={form?.email}
            placeholder="Ваша почта"
            readOnly={readonly}
            onChange={onChangeEmail}
          />
        </label>
      </div>

      <div className={classes.Group}>
        <label className={classNames(classes.Label, classes.City)}>
          <p className={classes.InputTitle}>
            Город
          </p>
          <input
            className={classes.Input}
            value={form?.city}
            placeholder="Город"
            readOnly={readonly}
            onChange={onChangeCity}
          />
        </label>

        <label className={classNames(classes.Label, classes.Street)}>
          <p className={classes.InputTitle}>
            Улица
          </p>
          <input
            className={classes.Input}
            value={form?.street}
            placeholder="Улица"
            readOnly={readonly}
            onChange={onChangeStreet}
          />
        </label>

        <label className={classNames(classes.Label, classes.Building)}>
          <p className={classes.InputTitle}>
            Дом/Корпус
          </p>
          <input
            className={classes.Input}
            value={form?.building}
            placeholder="Дом"
            readOnly={readonly}
            onChange={onChangeBuilding}
          />
        </label>

        <label className={classNames(classes.Label, classes.Apartment)}>
          <p className={classes.InputTitle}>
            Квартира
          </p>
          <input
            className={classes.Input}
            value={form?.apartment}
            placeholder="Квартира"
            readOnly={readonly}
            onChange={onChangeApartment}
          />
        </label>
      </div>

      {
        readonly
          ?
          <AppButton
            className={classes.ChangeButton}
            onClick={onEdit}
          >
            Изменить
          </AppButton>
          :
          <div className={classes.EditButtons}>
            <AppButton
              className={classes.ChangeButton}
              onClick={onCancelEdit}
            >
              Отменить
            </AppButton>

            <AppButton
              className={classes.ChangeButton}
              onClick={onSave}
            >
              Сохранить
            </AppButton>
          </div>
      }


    </div>
  );
};

export default PersonalData;