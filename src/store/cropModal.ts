import { createSlice } from "@reduxjs/toolkit";

const initialCropModal = { showModal: false };

const cropModalSlice = createSlice({
  name: "cropModal",
  initialState: initialCropModal,
  reducers: {
    click(state) {
      state.showModal = false;
    },
    crop(state) {
      state.showModal = true;
    },
  },
});

export const cropModalActions = cropModalSlice.actions;
export default cropModalSlice.reducer;
