import classes from './AdvantagesSection2.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";

const AdvantagesSection2 = () => {
  return (
    <section className={classes.AdvantagesSection2}>
      <AppContainer>

        <div className={classes.Items}>

          <div className={classes.Item}>
            <div className={classes.Title}>
              Самые «вкусные» предложения
            </div>
            <div className={classes.Description}>
              Мы делаем всё
              необходимое, чтобы покупатели получали доступ к актуальным новинкам, которые
              представляет российский мебельный рынок. Познакомиться с каждой моделью,
              сравнить цены на аналоги и выбрать лучшее вы можете прямо сейчас. Хотите
              первыми узнавать о самых выгодных предложениях? Тогда подписывайтесь на
              информационную рассылку!
            </div>
          </div>

          <div className={classes.Item}>
            <div className={classes.Title}>
              Гарантированное качество
            </div>
            <div className={classes.Description}>
              Вся продукция сопровождается
              гарантией производителя. В каталогах представлена только сертифицированная
              мебель. Собственный контроль качества тщательно проверяет каждый образец
              перед отправкой заказчику. Покупатели получают необходимые документы –
              гарантийный талон и чек.
            </div>
          </div>

          <div className={classes.Item}>
            <div className={classes.Title}>
              Впечатляющий ассортимент
            </div>
            <div className={classes.Description}>
              Ежедневно мы выбираем для
              наших каталогов идеальные образцы из товарной матрицы производителей по всей
              России. Модные расцветки, экологически безопасные материалы, надежные
              комплектующие – у нас вы найдете мебель своей мечты!
            </div>
          </div>

        </div>

      </AppContainer>
    </section>
  );
};

export default AdvantagesSection2;