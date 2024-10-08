import { createSlice } from "@reduxjs/toolkit";
import actPostSlice from "./actPostSlice";

export const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actPostSlice.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default postSlice.reducer;
