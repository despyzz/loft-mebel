import classes from './AdvantagesSection4.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import GreenCheck from 'shared/assets/pages/about/GreenCheck.svg';

const AdvantagesSection4 = () => {
  return (
    <section className={classes.AdvantagesSection4}>

      <AppContainer>
        <h2 className={classes.MainTitle}>
          Мы поможем сэкономить
          время, силы и деньги!
        </h2>
      </AppContainer>

      <AppContainer>
        <div className={classes.Items}>

          <div className={classes.Item}>
          <div className={classes.ImgWrapper}>
              <img src={GreenCheck} alt=""/>
            </div>

            <div className={classes.TextGroup}>
              <div className={classes.Title}>
                Время.
              </div>

              <div className={classes.Description}>
                Примем вашу заявку в кротчайшие сроки. При необходимости
                подберем для вас достойные варианты по заданным критериям.
              </div>
            </div>
          </div>

          <div className={classes.Item}>
            <div className={classes.ImgWrapper}>
              <img src={GreenCheck} alt=""/>
            </div>

            <div className={classes.TextGroup}>
              <div className={classes.Title}>
                Силы.
              </div>

              <div className={classes.Description}>
                Закупим оптом или закажем на фабрике, избавив от длительных
                обсуждений заказа с исполнителем. Курируем все этапы работы над
                заказом.
              </div>
            </div>
          </div>

          <div className={classes.Item}>
            <div className={classes.ImgWrapper}>
              <img src={GreenCheck} alt=""/>
            </div>

            <div className={classes.TextGroup}>
              <div className={classes.Title}>
                Деньги.
              </div>

              <div className={classes.Description}>
                Вы точно купите мебель дешевле, чем в розницу.
              </div>
            </div>
          </div>

        </div>
      </AppContainer>
    </section>
  );
};

export default AdvantagesSection4;