import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  stats: null,
  loading: true,
  token: null,
  creditCard: [],
  selectedCard: null,
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
      state.creditCard = action.payload.user.creditCard || [];
      state.selectedCard = action.payload.user.autoBillingCard || null;
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
      state.creditCard = [];
      state.selectedCard = null;
      sessionStorage.removeItem("forgeToken");
    },
    updateUser(state, action) {
      state.user = action.payload.user;
    },
    updateCard(state, action) {
      state.creditCard.push(action.payload);
    },
    filterCard(state, action) {
      state.creditCard = state.creditCard.filter(
        (card) => card._id !== action.payload
      );
    },
    setAutoBilling(state, action) {
      state.user.autoBilling = action.payload;
    },
    setAutoBillingCard(state, action) {
      state.user.autoBillingCard = action.payload;
      state.selectedCard = action.payload;
    },
    removeSelectedCard(state) {
      state.selectedCard = null;
      state.user.autoBillingCard = null;
    },
  },
});

export const {
  setUser,
  clearLoading,
  clearUser,
  updateUser,
  updateCard,
  filterCard,
  setAutoBilling,
  setAutoBillingCard,
  removeSelectedCard,
} = userSlice.actions;
export default userSlice.reducer;
