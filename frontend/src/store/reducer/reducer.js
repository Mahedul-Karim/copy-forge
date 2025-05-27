import { combineReducers } from "@reduxjs/toolkit";
import dark from "../slice/dark";
import user from "../slice/user";

export const rootReducer = combineReducers({
  dark,
  user,
});
