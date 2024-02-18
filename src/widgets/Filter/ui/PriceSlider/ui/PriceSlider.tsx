import React, {useState} from 'react';
import Nouislider from "nouislider-react";
import classes from "./PriceSlider.module.scss";
import './Price.scss';

const PriceSlider = () => {
  const startValue = 20000
  const endValue = 80000

  const [start, setStart] = useState(startValue);
  const [end, setEnd] = useState(endValue);

  return (
    <div className={classes.PriceSlider}>
      <Nouislider
        range={{min: 0, max: 100000}}
        start={[start, end]}
        step={1000}
        connect
        onChange={(values) => {
          const [s, e] = values;
          setStart(() => Math.ceil(s));
          setEnd(() => Math.ceil(e));
        }}
      />
      <div className={classes.PriceInputGroup}>
        <label className={classes.PriceLabel}>
          <input
            className={classes.PriceInput}
            type={"number"}
            value={start}
            onChange={(event) => {
              setStart(() => Number(event.target.value))
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
              setEnd(() => Number(event.target.value))
            }}
          />
        </label>
      </div>

    </div>
  );
};

export default PriceSlider;