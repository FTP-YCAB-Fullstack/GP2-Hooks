import { combineReducers } from "redux";
import { coinReducer } from "./coinReducer";

const reducers = combineReducers({
  allCoins: coinReducer,
});

export default reducers