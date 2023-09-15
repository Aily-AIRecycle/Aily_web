import { configureStore } from "@reduxjs/toolkit";
import markerReducer, { MarkerState } from "./marker";
import keywordReducer from "./keyword";
import resultReducer from "./result";
import locationReducer, { LocationState } from "./location";
import cropModalReducer from "./cropModal";
import imageReducer, { ImageState } from "./image";

export interface ToolkitStore {
  marker: MarkerState;
  keyword: {
    keyword: string;
  };
  result: {
    result: boolean;
  };
  location: LocationState;
  cropModal: {
    showModal: boolean;
  };
  image: ImageState;
}

const store = configureStore({
  reducer: {
    marker: markerReducer,
    keyword: keywordReducer,
    result: resultReducer,
    location: locationReducer,
    cropModal: cropModalReducer,
    image: imageReducer,
  },
});

export default store;
