import classes from './Filter.module.scss';
import "nouislider/distribute/nouislider.css";
import {CategorySelector} from "./CategorySelector";
import {PriceSlider} from "./PriceSlider";
import {FC} from "react";
import classNames from "classnames";
// import {ColorPicker} from "./ColorPicker";
// import {BrandSelector} from "./BrandSelector"

interface FilterProps {
  className?: string;
}

const Filter: FC<FilterProps> = (props) => {

  const {className} = props;

  return (
    <div className={classNames(className, classes.Filter)}>
      <div className={classes.Section}>
        <div className={classes.Title}>
          Раздел
        </div>
        <CategorySelector/>
      </div>
      <div className={classes.Section}>
        <div className={classes.Title}>
          Цена
        </div>
        <PriceSlider/>
      </div>


      {/*<div className={classes.Section}>*/}
      {/*  <div className={classes.Title}>*/}
      {/*    Цвет*/}
      {/*  </div>*/}
      {/*  <ColorPicker />*/}
      {/*</div>*/}

      {/*<div className={classes.Section}>*/}
      {/*  <div className={classes.Title}>*/}
      {/*    Бренд*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Filter;