import mainReducer from "./components/reducer/index";
import { legacy_createStore } from "redux";
const store = legacy_createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
