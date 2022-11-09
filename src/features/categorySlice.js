import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const categorySlice = createSlice({
  name: "categoryData",
  initialState,
  reducers: {
    setData: (state, action) => {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    },
    setFavourite: (state, action) => {
      return {
        ...state,
        data: state.data.map((post) => {
          if (post.docID === action.payload) {
            return { ...post, favourite: true };
          } else {
            return { ...post };
          }
        }),
      };
    },
    removeFavourite: (state, action) => {
      return {
        ...state,
        data: state.data.map((post) => {
          if (post.docID === action.payload) {
            return { ...post, favourite: false };
          } else {
            return { ...post };
          }
        }),
      };
    },
    removeData: (state, action) => {
      return {
        ...state,
        data: state.data.filter((item) => {
          return item?.docID !== action.payload;
        }),
      };
    },
    clearData: (state) => {
      state.categoryData = null;
    },
  },
});

export const { setData, removeData, setFavourite, removeFavourite, clearData } =
  categorySlice.actions;

export const selectCategoryData = (state) => state.categoryData.data;

export default categorySlice.reducer;
