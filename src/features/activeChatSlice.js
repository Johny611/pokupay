import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const activeChatSlice = createSlice({
  name: "activeChat",
  initialState,
  reducers: {
    setActiveChat: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setActiveChat } = activeChatSlice.actions;

export const selectActiveChat = (state) => state.activeChat.data;

export default activeChatSlice.reducer;
