import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const incrementHandlerby5 = () => {
    dispatch(counterActions.incrementby5(5));
  };
  const decrementHandlerby5 = () => {
    dispatch(counterActions.decrementby5(5));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show ? <div className={classes.value}>{counter}</div> : ""}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandlerby5}>Increment by 5</button>
        <button onClick={decrementHandlerby5}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
