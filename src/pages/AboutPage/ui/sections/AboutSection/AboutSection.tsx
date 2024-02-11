import classes from './AboutSection.module.scss';

import AppContainer from "shared/ui/AppContainer/AppContainer";
import Photo from "../../../../../shared/assets/pages/about/AboutPhoto.png";

const AboutSection = () => {
  return (
    <section className={classes.AboutSection}>

      <div className={classes.Background}>
        <div className={classes.White}/>
        <div className={classes.Colored}/>
      </div>

      <AppContainer className={classes.AboutContent}>

        <img className={classes.Photo} src={Photo} alt=""/>

        <div className={classes.TextGroup}>
          <div className={classes.MiniTitle}>
            О магазине
          </div>

          <h1 className={classes.MainTitle}>
            Интернет-магазин «Лофт Мебель»:
            купите хорошую
            мебель в один клик!
          </h1>

          <p className={classes.Paragraph}>
            Уникальный формат интернет-магазина позволит вам купить лучшую
            мебель крупнейших российских фабрик максимально быстро и по
            выгодной цене!
          </p>

          <p className={classes.Paragraph}>
            Мы благодарим за доверие более десятка производителей, которые дали
            нам возможность представлять лучшие образцы их продукции в
            российском интернет-пространстве. Прямые договоры на поставку
            мебели с фабрик обеспечивают наиболее привлекательные условия для
            наших покупателей.
          </p>

        </div>
      </AppContainer>
    </section>
  );
};

export default AboutSection;