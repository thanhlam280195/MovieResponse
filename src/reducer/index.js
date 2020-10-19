import { combineReducers } from "redux";
import films from "./films";

const appReducers = combineReducers({
  films,
});

export default appReducers;
