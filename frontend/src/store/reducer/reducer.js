import { combineReducers } from "@reduxjs/toolkit";
import dark from "../slice/dark";
import user from "../slice/user";
import content from "../slice/content";

export const rootReducer = combineReducers({
  dark,
  user,
  content,
});
