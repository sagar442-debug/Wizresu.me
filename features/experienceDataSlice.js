import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  experience: [],
};

const experienceDataSlice = createSlice({
  name: "experienceData",
  initialState,
  reducers: {
    addExperience: (state, action) => {
      state.experience.push(action.payload);
    },
    updateExperience: (state, action) => {
      const { index, field, value } = action.payload;
      if (state.experience[index]) {
        state.experience[index][field] = value;
      }
    },
    removeExperience: (state, action) => {
      const { index } = action.payload;
      if (state.experience[index]) {
        state.experience.splice(index, 1);
      }
    },
  },
});

export const { addExperience, updateExperience, removeExperience } =
  experienceDataSlice.actions;
export default experienceDataSlice.reducer;
