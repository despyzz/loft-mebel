import Nouislider from "nouislider-react";
import classes from "./PriceSlider.module.scss";
import './Price.scss';
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {filterActions, filterReducer} from "../../../model/slices/filterSlice";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getFilterPrice} from "../../../model/selectors/filterSelectors";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {memo} from "react";

const reducers: ReducerList = {
  filter: filterReducer
}

const PriceSlider = memo(() => {
  const dispatch = useAppDispatch();

  const {start, end} = useSelector(getFilterPrice);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classes.PriceSlider}>
        <Nouislider
          range={{min: 0, max: 100000}}
          start={[start, end]}
          step={1000}
          connect
          onChange={(values) => {
            const [s, e] = values;
            dispatch(filterActions.setPrice({
              start: Math.ceil(s),
              end: Math.ceil(e)
            }))
          }}
        />
        <div className={classes.PriceInputGroup}>
          <label className={classes.PriceLabel}>
            <input
              className={classes.PriceInput}
              type={"number"}
              value={start}
              onChange={(event) => {
                dispatch(filterActions.setPrice({
                  start: Number(event.target.value),
                  end
                }))
              }}
            />
          </label>

          <div className={classes.Separator}/>

          <label className={classes.PriceLabel}>
            <input
              className={classes.PriceInput}
              type={"number"}
              value={end}
              onChange={(event) => {
                dispatch(filterActions.setPrice({
                  start,
                  end: Number(event.target.value)
                }))
              }}
            />
          </label>
        </div>
      </div>
    </DynamicModuleLoader>
  );
});

export default PriceSlider;