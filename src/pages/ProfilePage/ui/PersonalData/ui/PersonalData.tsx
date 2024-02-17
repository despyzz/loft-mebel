import classes from './PersonalData.module.scss';
import classNames from "classnames";
import AppButton from "shared/ui/AppButton/AppButton";
import {FC, useState} from "react";

interface PersonalDataProps {
  className?: string
}

const PersonalData:FC<PersonalDataProps> = (props) => {
  const {className} = props;
  const [readonly, setReadonly] = useState(true);

  const toggleReadonly = () => setReadonly(prevState => !prevState)

  const onChange = () => {
    toggleReadonly();
  }

  const onSave = () => {
    toggleReadonly();
    console.log('Сохранение данных')
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
            placeholder="Дмитрий"
            readOnly={readonly}
          />
        </label>

        <label className={classNames(classes.Label, classes.Surname)}>
          <p className={classes.InputTitle}>
            Фамилия
          </p>
          <input
            className={classes.Input}
            placeholder="Кусов"
            readOnly={readonly}
          />
        </label>

        <label className={classNames(classes.Label, classes.Phone)}>
          <p className={classes.InputTitle}>
            Номер телефона
          </p>
          <input
            className={classes.Input}
            placeholder="+7 (123) 456-78-910"
            readOnly={readonly}
          />
        </label>

        <label className={classNames(classes.Label, classes.Email)}>
          <p className={classes.InputTitle}>
            E-mail
          </p>
          <input
            className={classes.Input}
            placeholder="mail@example.com"
            readOnly={readonly}
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
            placeholder="Москва"
            readOnly={readonly}
          />
        </label>

        <label className={classNames(classes.Label, classes.Street)}>
          <p className={classes.InputTitle}>
            Улица
          </p>
          <input
            className={classes.Input}
            placeholder="Михалковская"
            readOnly={readonly}
          />
        </label>

        <label className={classNames(classes.Label, classes.Building)}>
          <p className={classes.InputTitle}>
            Дом/Корпус
          </p>
          <input
            className={classes.Input}
            placeholder="16/1"
            readOnly={readonly}
          />
        </label>

        <label className={classNames(classes.Label, classes.Apartment)}>
          <p className={classes.InputTitle}>
            Квартира
          </p>
          <input
            className={classes.Input}
            placeholder="123"
            readOnly={readonly}
          />
        </label>
      </div>

      {
        readonly
          ?
          <AppButton
            className={classes.ChangeButton}
            onClick={onChange}
          >
            Изменить
          </AppButton>
          :
          <AppButton
            className={classes.ChangeButton}
            onClick={onSave}
          >
            Сохранить
          </AppButton>
      }

    </div>
  );
};

export default PersonalData;