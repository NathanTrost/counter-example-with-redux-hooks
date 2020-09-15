export const increaseCount = () => (dispatch) => {
  dispatch({
    type: "INCREASE_COUNT",
    payload: "result_of_incremented_count",
  });
};

export const decreaseCount = () => (dispatch) => {
  dispatch({
    type: "DECREASE_COUNT",
    payload: "result_of_decremented_count",
  });
};
