import { configureStore } from "@reduxjs/toolkit";
import personalDataReducer from "../features/personalDataSlice";
import userInfoReducer from "../features/userInfoSlice";

const store = configureStore({
  reducer: {
    personalData: personalDataReducer,
    userInfo: userInfoReducer,
  },
});

export default store;
