import classes from './RecommendationSection.module.scss';

import AppContainer from "shared/ui/AppContainer/AppContainer";
import {Products} from "entities/Product";

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