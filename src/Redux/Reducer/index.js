import { combineReducers } from "redux";
import SafeReducer from "./reducer";
import SecretReducer from "./secretreducer";

const Reducers = combineReducers({
  safe: SafeReducer,
  //secret: SecretReducer,
});

export default Reducers;
