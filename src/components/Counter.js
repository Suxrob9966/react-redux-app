import { useSelector } from 'react-redux'; // we need this hook to read data from our redux store
import classes from './Counter.module.css';

const Counter = () => {
  // useSelector() hook needs a function with state parameter from which we then exctract the value that we need
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
