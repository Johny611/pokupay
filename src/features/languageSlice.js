import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "rus",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state) => state.language.data;

export default languageSlice.reducer;
