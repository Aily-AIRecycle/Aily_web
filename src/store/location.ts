import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Location {
  id: number;
  title: string;
  address: string;
}

interface LocationState {
  location: Location[];
}

const initialLocationState: LocationState = {
  location: [],
};

const locationSlice = createSlice({
  name: "location",
  initialState: initialLocationState,
  reducers: {
    locationClicked(state, action: PayloadAction<Location>) {
      return {
        location: [
          {
            id: action.payload.id,
            title: action.payload.title,
            address: action.payload.address,
          },
        ],
      };
    },
    locationList(state, action: PayloadAction<Location>) {
      return {
        location: [
          {
            id: action.payload.id,
            title: action.payload.title,
            address: action.payload.address,
          },
          ...state.location,
        ],
      };
    },
    clear() {
      return { location: [] };
    },
  },
});

export const locationActions = locationSlice.actions;
export default locationSlice.reducer;
