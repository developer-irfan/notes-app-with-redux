import { combineReducers } from "redux";
import noteReducer from "./noteReducer";
import showOrHideNewNoteForm from "./showOrHideNoteFormReducer";
import loginReducer from "./LoginReducer";
const mainReducer = combineReducers({
  noteReducer,
  showOrHideNewNoteForm,
  loginReducer,
});
export default mainReducer;
