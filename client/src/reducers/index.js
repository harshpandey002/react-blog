import { combineReducers } from "redux";
import story from "./story";
import fav from "./fav";

const rootReducer = combineReducers({
  story,
  fav,
});

export default rootReducer;
