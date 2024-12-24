import { configureStore } from "@reduxjs/toolkit";
import personalDataReducer from "../features/personalDataSlice";
import userInfoReducer from "../features/userInfoSlice";
import experienceReducer from "../features/experienceDataSlice";
import projectReducer from "../features/projectDataSlice";
import wizresumeReducer from "../features/wizresumeDataSlice";

const store = configureStore({
  reducer: {
    personalData: personalDataReducer,
    userInfo: userInfoReducer,
    experienceData: experienceReducer,
    projectData: projectReducer,
    wizresumeData: wizresumeReducer,
  },
});

export default store;
