import { combineReducers } from "redux";
import milestoneReducer from "./Milestone/reducer";

const rootReducer = combineReducers({
  milestone: milestoneReducer,
});

export default rootReducer;
