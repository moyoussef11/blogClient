import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./Slices/postSlice";

export const store = configureStore({
  reducer: {
    posts: postSlice,
  },
});
