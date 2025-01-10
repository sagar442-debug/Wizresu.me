import { configureStore } from "@reduxjs/toolkit";
import personalDataReducer from "../features/personalDataSlice";
import userInfoReducer from "../features/userInfoSlice";
import experienceReducer from "../features/experienceDataSlice";
import projectReducer from "../features/projectDataSlice";
import wizresumeReducer from "../features/wizresumeDataSlice";
import skillReducer from "../features/skillSlice";
import educationReducer from "../features/educationSlice";
const store = configureStore({
  reducer: {
    personalData: personalDataReducer,
    userInfo: userInfoReducer,
    experienceData: experienceReducer,
    projectData: projectReducer,
    wizresumeData: wizresumeReducer,
    skillData: skillReducer,
    educationData: educationReducer,
  },
});

export default store;
