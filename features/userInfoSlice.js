import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { updateUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
