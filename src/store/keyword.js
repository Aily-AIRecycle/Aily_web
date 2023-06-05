import { createSlice } from "@reduxjs/toolkit";

const initialKeyword = { keyword: "" };

const keywordSlice = createSlice({
  name: "keyword",
  initialState: initialKeyword,
  reducers: {
    change(state, action) {
      state.keyword = action.payload;
    },
  },
});

export const keywordActions = keywordSlice.actions;
export default keywordSlice.reducer;
