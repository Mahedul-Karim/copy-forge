import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
};

const toggleDark = createSlice({
  name: "dark",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
      }

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
