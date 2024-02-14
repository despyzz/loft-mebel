import classes from './BonusProgram.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";

import Bonus from 'shared/assets/Bonus.svg';
import Cashback from 'shared/assets/Cashback.svg';
import Present from 'shared/assets/Present.svg';

const BonusProgram = () => {
  return (
    <AppContainer>
      <div className={classes.BonusProgram}>
        <div className={classes.Header}>
          <h1 className={classes.Title}>
            Бонусная программа
          </h1>

          <div className={classes.Content}>
            <div className={classes.HeaderItem}>
              У вас 0 бонусных баллов
            </div>
            <div className={classes.HeaderItem}>
              Правила бонусной программы
            </div>
          </div>
        </div>

        <div className={classes.Main}>
          <div className={classes.MainItem}>
            <img className={classes.Icon} src={Cashback} alt=""/>
            <h3>Возвращаем до 7% на бонусный счет</h3>
          </div>
          <div className={classes.MainItem}>
            <img className={classes.Icon} src={Bonus} alt=""/>
            <h3>1 бонус = 1 рубль</h3>
          </div>
          <div className={classes.MainItem}>
            <img className={classes.Icon} src={Present} alt=""/>
            <h3>Оплачивайте бонусами до 20% от покупки</h3>
          </div>
        </div>
      </div>

    </AppContainer>
  );
};

export {
  BonusProgram
};