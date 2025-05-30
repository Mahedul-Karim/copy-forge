import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  document: null,
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setDocument(state, action) {
      state.document = action.payload.document;
    },
  },
});

export const { setDocument } = contentSlice.actions;
export default contentSlice.reducer;
