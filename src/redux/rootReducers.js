import { combineReducers } from "redux";
import colorReducer from "./reducers/colorReducer";
import imageReducer from "./reducers/imageReducer";
import skillReducer from "./reducers/skillReducer";

const rootReducers = combineReducers({
  test: colorReducer,
  images: imageReducer,
  skill: skillReducer,
});
export default rootReducers;
