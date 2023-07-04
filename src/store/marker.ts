import { createSlice } from "@reduxjs/toolkit";

const initialMarkerState = {
  marker: [],
};

const markerSlice = createSlice({
  name: "marker",
  initialState: initialMarkerState,
  reducers: {
    markerClicked(state, action) {
      return {
        marker: [
          {
            id: action.payload.id,
            title: action.payload.title,
            address: action.payload.address,
          },
        ],
      };
    },
    markerList(state, action) {
      return {
        marker: [
          {
            id: action.payload.id,
            title: action.payload.title,
            address: action.payload.address,
          },
          ...state.marker,
        ],
      };
    },
    clear() {
      return { marker: [] };
    },
  },
});

export const markerActions = markerSlice.actions;
export default markerSlice.reducer;
