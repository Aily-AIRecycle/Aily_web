import { createSlice } from "@reduxjs/toolkit";

const initialResult = { result: false };

const resultSlice = createSlice({
  name: "result",
  initialState: initialResult,
  reducers: {
    // 마커 클릭했을 때 -> true
    // 처음 검색할 때 -> false
    // 검색 중일 때 -> true
    // 검색한 상태에서 다른 곳에 손 댈때 -> true
    // 검색하려다가 검색창 빈 상태에서 손 땔 때 -> false
    show(state) {
      state.result = true;
    },
    hide(state) {
      state.result = false;
    },
  },
});

export const resultActions = resultSlice.actions;
export default resultSlice.reducer;
