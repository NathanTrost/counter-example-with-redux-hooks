import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { increaseCount, decreaseCount } from "../actions/countActions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const onAddClick = () => dispatch(increaseCount());
  const onDecreaseClick = () => dispatch(decreaseCount());

  return (
    <>
      <h3>{count}</h3>
      <button onClick={onAddClick}>Add to count</button>{" "}
      <button onClick={onDecreaseClick}>Remove from count</button>
    </>
  );
};

export default Counter;
