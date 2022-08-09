import { combineReducers } from "redux";
import cartReducer from "./Cart/reducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
});
