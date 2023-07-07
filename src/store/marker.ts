import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Marker {}

interface MarkerState {
  marker: Marker[];
}

const initialMarkerState: MarkerState = {
  marker: [],
};

const markerSlice = createSlice({
  name: "marker",
  initialState: initialMarkerState,
  reducers: {
    markerList(state, action: PayloadAction<Location>) {
      return {
        marker: [action.payload, ...state.marker],
      };
    },
    clear() {
      return { marker: [] };
    },
  },
});

export const markerActions = markerSlice.actions;
export default markerSlice.reducer;
