import { configureStore } from "@reduxjs/toolkit";
import personalDataReducer from "../features/personalDataSlice";

const store = configureStore({
  reducer: {
    personalData: personalDataReducer,
  },
});

export default store;
