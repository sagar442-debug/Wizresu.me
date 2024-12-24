import { configureStore } from "@reduxjs/toolkit";
import personalDataReducer from "../features/personalDataSlice";
import userInfoReducer from "../features/userInfoSlice";
import experienceReducer from "../features/experienceDataSlice";
import projectReducer from "../features/projectDataSlice";

const store = configureStore({
  reducer: {
    personalData: personalDataReducer,
    userInfo: userInfoReducer,
    experienceData: experienceReducer,
    projectData: projectReducer,
  },
});

export default store;
