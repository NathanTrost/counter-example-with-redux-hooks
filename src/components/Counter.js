import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  zeroCounter,
} from "../actions/counterActions";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onAddClick = () => dispatch(incrementCounter());
  const onDecreaseClick = () => dispatch(decrementCounter());
  const onZeroClick = () => dispatch(zeroCounter());

  return (
    <>
      <h3>{count}</h3>
      <button onClick={onAddClick}>Increment count</button>{" "}
      <button onClick={onDecreaseClick}>Decrement counter</button>{" "}
      <button onClick={onZeroClick}>Zero counter out</button>
    </>
  );
};

export default Counter;
