import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noExperience: false,
  noProject: false,
};

const wizresumeDataSlice = createSlice({
  name: "wizresumeData",
  initialState,
  reducers: {
    updateNoExperience: (state, action) => {
      state.noExperience = action.payload;
    },
    updateNoProject: (state, action) => {
      state.noProject = action.payload;
    },
  },
});

export const { updateNoExperience, updateNoProject } =
  wizresumeDataSlice.actions;
export default wizresumeDataSlice.reducer;
