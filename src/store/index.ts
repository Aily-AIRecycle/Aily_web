import { configureStore } from "@reduxjs/toolkit";
import markerReducer from "./marker";
import keywordReducer from "./keyword";
import resultReducer from "./result";
import locationReducer from "./location";
import cropModalReducer from "./cropModal";
import imageReducer from "./image";

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
