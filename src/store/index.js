import { configureStore } from "@reduxjs/toolkit";
import markerReducer from "./marker";
import keywordReducer from "./keyword";
import resultReducer from "./result";

const store = configureStore({
  reducer: {
    marker: markerReducer,
    keyword: keywordReducer,
    result: resultReducer,
  },
});

export default store;
