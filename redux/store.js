import { configureStore } from "@reduxjs/toolkit";
import personalDataReducer from "../features/personalDataSlice";
import userInfoReducer from "../features/userInfoSlice";
import experienceReducer from "../features/experienceDataSlice";

const store = configureStore({
  reducer: {
    personalData: personalDataReducer,
    userInfo: userInfoReducer,
    experienceData: experienceReducer,
  },
});

export default store;
