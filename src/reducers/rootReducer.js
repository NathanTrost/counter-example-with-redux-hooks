import { combineReducers } from "redux";
import counter from "./counter";
import setDateTime from "./setDateTime";

export default combineReducers({
  counter,
  setDateTime,
});
