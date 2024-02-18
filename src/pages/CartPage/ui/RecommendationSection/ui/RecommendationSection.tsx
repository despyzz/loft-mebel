import classes from './RecommendationSection.module.scss';
import {Products} from "widgets/Products";
import AppContainer from "shared/ui/AppContainer/AppContainer";

const RecommendationSection = () => {
  return (
    <section>
      <AppContainer className={classes.RecommendationSection}>
        <div className={classes.Title}>
          Вам может понравиться
        </div>

        <Products/>
      </AppContainer>
    </section>
  );
};

export default RecommendationSection;