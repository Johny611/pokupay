import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import publishReducer from "../features/publishSlice";
import imagesSlice from "../features/imagesSlice";
import categoryReducer from "../features/categorySlice";
import languageReducer from "../features/languageSlice";
import activeChatReducer from "../features/activeChatSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    images: imagesSlice,
    publishData: publishReducer,
    categoryData: categoryReducer,
    language: languageReducer,
    activeChat: activeChatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
