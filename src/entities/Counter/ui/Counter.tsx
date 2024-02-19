import AppButton from "shared/ui/AppButton/AppButton";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../model/slice/counterSlice";
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";
import classes from './Counter.module.scss';

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <AppContainer>
      <div>value: {counterValue}</div>
      <AppButton className={classes.Button} onClick={increment}>
        +
      </AppButton>
      <AppButton className={classes.Button} onClick={decrement}>
        -
      </AppButton>
    </AppContainer>
  );
};

export default Counter;