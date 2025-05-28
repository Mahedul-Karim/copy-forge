import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  stats: null,
  loading: true,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.stats = action.payload.stats;
      state.loading = false;
      state.token = action.payload.token;

      if (action.payload.token) {
        sessionStorage.setItem("forgeToken", action.payload.token);
      }
    },
    clearLoading(state) {
      state.loading = false;
    },
    clearUser(state) {
      state.user = null;
      state.stats = null;
      state.token = null;
      sessionStorage.removeItem("forgeToken");
    },
  },
});

export const { setUser, clearLoading,clearUser } = userSlice.actions;
export default userSlice.reducer;
