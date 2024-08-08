import { configureStore } from "@reduxjs/toolkit";
import webinarReducer from "./slices/webinarSlice";

export const store = configureStore({
  reducer: {
    webinar: webinarReducer,
  },
});
