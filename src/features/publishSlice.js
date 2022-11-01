import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    title: "",
    personal: "",
    currency: "sum",
  },
};

export const publishSlice = createSlice({
  name: "publish",
  initialState,
  reducers: {
    setPublish: (state, action) => {
      return { ...state, data: { ...state.data, ...action.payload } };
    },
    clearPublish: (state) => {
      state.publish = null;
    },
  },
});

export const { setPublish, clearPublish } = publishSlice.actions;

export const selectPublish = (state) => state.publish.data;

export default publishSlice.reducer;
