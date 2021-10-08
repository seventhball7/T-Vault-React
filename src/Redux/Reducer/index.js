import { combineReducer } from "redux";
import reducer from "./reducer";

const reducers = combineReducer({
  safe: reducer,
});

export default reducers;
