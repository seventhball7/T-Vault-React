import { combineReducers } from "redux";
import SafeReducer from "../Reducer/reducer";

const Reducers = combineReducers({
  safe: SafeReducer,
});

export default Reducers;
