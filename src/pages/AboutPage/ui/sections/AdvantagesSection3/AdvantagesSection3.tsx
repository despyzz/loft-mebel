import classes from './AdvantagesSection3.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";

import Cooperate from "shared/assets/pages/about/Cooperate.svg";
import Support from "shared/assets/pages/about/Support.svg";
import FastDelivery from "shared/assets/pages/about/FastDelivery.svg";
import Restart from "shared/assets/pages/about/Restart.svg";

const AdvantagesSection3 = () => {
  return (
    <section className={classes.AdvantagesSection3}>
      <AppContainer>
        <div className={classes.Items}>
          <div className={classes.Item}>
            <div className={classes.Icon}>
              <img src={Cooperate} alt=""/>
            </div>
            <h3 className={classes.Title}>
              Особенные условия для оптовиков
            </h3>
            <p className={classes.Description}>
              Число наших оптовых
              покупателей неуклонно возрастает и всё потому, что мы сумели предложить
              владельцам мебельных магазинов наиболее выгодные условия.
            </p>
          </div>

          <div className={classes.Item}>
            <div className={classes.Icon}>
              <img src={FastDelivery} alt=""/>
            </div>
            <h3 className={classes.Title}>
              Оперативная доставка
            </h3>
            <p className={classes.Description}>
              Собственная курьерская служба
              быстро привезет купленную мебель по указанному адресу.
              В российские регионы доставка осуществляется силами транспортных компаний.
            </p>
          </div>

          <div className={classes.Item}>
            <div className={classes.Icon}>
              <img src={Support} alt=""/>
            </div>
            <h3 className={classes.Title}>
              Внимательный сервис
            </h3>
            <p className={classes.Description}>
              Квалифицированные менеджеры
              интернет-магазина ответят на все вопросы по ассортименту и предоставляемым
              возможностям, а также помогут оформить заказ и проконтролируют реализацию клиентских пожеланий при заказе
              мебели.
            </p>
          </div>

          <div className={classes.Item}>
            <div className={classes.Icon}>
              <img src={Restart} alt=""/>
            </div>
            <h3 className={classes.Title}>
              Каждый пятый покупатель заказывает у нас
              повторно!
            </h3>
            <p className={classes.Description}>
              И мы благодарим всех, кто воспользовался нашим уникальным предложением, заказал мебель быстро и недорого и
              порекомендовал друзьям и
              знакомым.
            </p>
          </div>
        </div>
      </AppContainer>
    </section>
  );
};

export default AdvantagesSection3;