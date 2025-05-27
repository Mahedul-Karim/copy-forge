import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  stats: null,
  loading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.stats = action.payload.stats;
      state.loading = false;
    },
    clearLoading(state) {
      state.loading = false;
    },
  },
});

export const { setUser, clearLoading } = userSlice.actions;
export default userSlice.reducer;
