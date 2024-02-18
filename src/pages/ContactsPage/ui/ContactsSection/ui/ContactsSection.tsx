import classes from './ContactsSection.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import classNames from "classnames";
import AppButton from "shared/ui/AppButton/AppButton";

import ContactIcon from "shared/assets/ContactIcon.svg"
import MailIcon from "shared/assets/MailIcon.svg"
import InstagramIcon from "shared/assets/InstagramIcon.svg"
import AppLink from "shared/ui/AppLink/AppLink";

const ContactsSection = () => {
  return (
    <AppContainer className={classes.ContactsSection}>
      <h1 className={classes.Title}>
        Свяжитесь с нами
      </h1>

      <div className={classes.Content}>

        <form className={classes.Form}>
          <label className={classNames(classes.Label, classes.Name)}>
            <p className={classes.InputTitle}>
              Ваше имя
            </p>
            <input
              className={classes.Input}
              type="text"
            />
          </label>

          <label className={classNames(classes.Label, classes.Email)}>
            <p className={classes.InputTitle}>
              Ваш e-mail
            </p>
            <input
              className={classes.Input}
              type="text"
            />
          </label>

          <label className={classNames(classes.Label, classes.Message)}>
            <p className={classes.InputTitle}>
              Ваш e-mail
            </p>
            <textarea
              className={classNames(classes.Input, classes.TextArea)}
            />
          </label>

          <div className={classes.Buttons}>
            <AppButton className={classes.AttachButton}>
              Прикрепить файл
            </AppButton>
            <AppButton className={classes.SendButton}>
              Отправить файл
            </AppButton>
          </div>
        </form>

        <div className={classes.Links}>
          <AppLink
            className={classes.Link}
            to="tel:89648999119"
          >
            <img src={ContactIcon} alt=""/>
            <p>8 (964) 89 99 119</p>
          </AppLink>

          <AppLink
            className={classes.Link}
            to="mailto:mebel_loft_anapa@mail.ru"
          >
            <img src={MailIcon} alt=""/>
            <p>mebel_loft_anapa@mail.ru</p>
          </AppLink>

          <AppLink
            className={classes.Link}
            to="instagram.com"
          >
            <img src={InstagramIcon} alt=""/>
            <p>INSTAGRAM</p>
          </AppLink>

          <AppLink
            className={classes.Link}
            to="/contacts"
          >
            <p>Адрес: г. Анапа, Анапское шоссе, 30 Ж/К Черное море</p>
          </AppLink>


        </div>

      </div>
    </AppContainer>
  );
};

export default ContactsSection;