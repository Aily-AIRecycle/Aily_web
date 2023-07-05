import { configureStore } from "@reduxjs/toolkit";
import markerReducer from "./marker";
import keywordReducer from "./keyword";
import resultReducer from "./result";
import locationReducer from "./location";

const store = configureStore({
  reducer: {
    marker: markerReducer,
    keyword: keywordReducer,
    result: resultReducer,
    location: locationReducer,
  },
});

export default store;
