import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages: (state, action) => {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    },
    removeImage: (state, action) => {
      return {
        ...state,
        data: state.data.filter((item) => {
          return item?.name !== action.payload;
        }),
      };
    },
    setImageThumbnail: (state) => {
      return {
        ...state,
        data: (state.data[0].thumbnail = true),
      };
    },
    changeOrder: (state, action) => {
      state.data = action.payload;
    },
    clearImages: (state) => {
      state.images = null;
    },
  },
});

export const {
  setImages,
  removeImage,
  setImageThumbnail,
  changeOrder,
  clearImages,
} = imagesSlice.actions;

export const selectImages = (state) => state.images.data;

export default imagesSlice.reducer;
