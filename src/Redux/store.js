import { createStore } from "redux";
import Reducers from "./Reducer/index";

const Store = createStore(Reducers, {});
export default Store;
