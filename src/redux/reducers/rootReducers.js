import { combineReducers } from "redux";

import projectReducer from "./project";
import authReducer from "./auth";

export default combineReducers({
  project: projectReducer,
  auth: authReducer,
});
