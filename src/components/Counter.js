import { useDispatch, useSelector } from 'react-redux'; // we need useSelector() hook to read data from our redux store. we need connect to use redux in class based components
import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch(); // dispatch becomes a function

  const counter = useSelector((state) => state.counter); // useSelector() hook needs a function with state parameter from which we then extract the value that we need
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment()); // redux toolkit syntax
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increment by 10</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// REDUX with class based components
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// // equialent to using useSelector() hook in functional programming
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// // equialent to using useDispatch() hook in functional programming
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: dispatch({ type: 'increment' }),
//     decrement: dispatch({ type: 'decrement' }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter); // connect is higher order component that takes two functions as parameters. it first executes and returns a new function to which we pass Counter
