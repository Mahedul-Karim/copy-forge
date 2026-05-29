import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  document: null,
  contents:null
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setDocument(state, action) {
      state.document = action.payload.document;
      state.contents = action.payload.contents;
    },
  },
});

export const { setDocument } = contentSlice.actions;
export default contentSlice.reducer;
