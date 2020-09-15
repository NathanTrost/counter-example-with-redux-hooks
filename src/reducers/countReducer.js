import initialState from "./initialState";

export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return {
        count: action.payload,
      };
    case "DECREASE_COUNT":
      return {
        count: action.payload,
      };
    default:
      return state;
  }
}
