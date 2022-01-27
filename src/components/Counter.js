import { useDispatch, useSelector } from 'react-redux'; // we need this hook to read data from our redux store
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch(); // dispatch becomes a function

  const counter = useSelector((state) => state.counter); // useSelector() hook needs a function with state parameter from which we then exctract the value that we need
  const incrementHandler = () => {
    dispatch({
      type: 'increment',
    });
  };

  const decrementHandler = () => {
    dispatch({
      type: 'decrement',
    });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
