import { combineReducers } from "redux";
import noteReducer from "./noteReducer";
const mainReducer = combineReducers({ noteReducer });
export default mainReducer;
