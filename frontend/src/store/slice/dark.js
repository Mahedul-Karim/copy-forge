import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode:
    window.matchMedia("(prefers-color-scheme: dark)").matches,
};

const toggleDark = createSlice({
  name: "dark",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      if (state.isDarkMode) {
        state.isDarkMode = false;
      } else {
        state.isDarkMode = true;
      }
    },
  },
});

export const { toggleDarkMode } = toggleDark.actions;
export default toggleDark.reducer;
