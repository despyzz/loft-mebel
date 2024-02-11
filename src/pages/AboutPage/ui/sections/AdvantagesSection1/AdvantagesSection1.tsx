import classes from './AdvantagesSection1.module.scss';

import BestPrice from 'shared/assets/pages/about/BestPrice.svg'
import Customization from 'shared/assets/pages/about/Customization.svg'
import TimeSaving from 'shared/assets/pages/about/TimeSaving.svg'
import DirectDelivery from 'shared/assets/pages/about/DirectDelivery.svg'
import AppContainer from "shared/ui/AppContainer/AppContainer";

const AdvantagesSection1 = () => {
  return (
    <section className={classes.AdvantagesSection1}>
      <h2 className={classes.MainTitle}>
        Покупайте с выгодой!
      </h2>

      <AppContainer>
        <div className={classes.Items}>
          <div className={classes.Item}>
            <div className={classes.ImgWrapper}>
              <img src={BestPrice} alt=""/>
            </div>
            <div className={classes.TextGroup}>
              <h3 className={classes.Title}>
                Лучшая цена
              </h3>
              <p className={classes.Description}>
                Предлагаем близкие к оптовым цены, которые дают возможность приобретать мебель дешевле,
                чем в розничных салонах и шоу-румах.
              </p>
            </div>
          </div>

          <div className={classes.Item}>
            <div className={classes.ImgWrapper}>
              <img src={DirectDelivery} alt=""/>
            </div>
            <div className={classes.TextGroup}>
              <h3 className={classes.Title}>
                Прямые поставки
              </h3>
              <p className={classes.Description}>
                С ведущих мебельных фабрик уменьшают срок
                выполнения вашего заказа, даже если речь идет об изготовлении предметов по
                индивидуальному проекту.
              </p>
            </div>
          </div>

          <div className={classes.Item}>
            <div className={classes.ImgWrapper}>
              <img src={TimeSaving} alt=""/>
            </div>
            <div className={classes.TextGroup}>
              <h3 className={classes.Title}>
                Экономия времени
              </h3>
              <p className={classes.Description}>
                Не нашли оптимальный вариант или нет
                времени на поиски? Оставьте онлайн-заявку с критериями, и мы предложим вам
                несколько достойных образцов.
              </p>
            </div>
          </div>

          <div className={classes.Item}>
            <div className={classes.ImgWrapper}>
              <img src={Customization} alt=""/>
            </div>
            <div className={classes.TextGroup}>
              <h3 className={classes.Title}>
                Изготовление на заказ
              </h3>
              <p className={classes.Description}>
                Принимаем заявки на изготовление
                мебели по персональному дизайн-проекту от покупателей из любой точки России.
                Просим быть готовыми к авансированной оплате персональных заказов.
              </p>
            </div>
          </div>
        </div>
      </AppContainer>
    </section>
  );
};

export default AdvantagesSection1;