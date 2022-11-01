import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import publishReducer from "../features/publishSlice";
import imagesSlice from "../features/imagesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    images: imagesSlice,
    publishData: publishReducer,
  },
});
