import classes from './RecommendationSection.module.scss';

import AppContainer from "shared/ui/AppContainer/AppContainer";
import {ProductList} from "entities/Product";

const RecommendationSection = () => {
  return (
    <section>
      <AppContainer className={classes.RecommendationSection}>
        <div className={classes.Title}>
          Вам может понравиться
        </div>

        <ProductList/>
      </AppContainer>
    </section>
  );
};

export default RecommendationSection;