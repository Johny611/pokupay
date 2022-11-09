import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import publishReducer from "../features/publishSlice";
import imagesSlice from "../features/imagesSlice";
import categoryReducer from "../features/categorySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    images: imagesSlice,
    publishData: publishReducer,
    categoryData: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
