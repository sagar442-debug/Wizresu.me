import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  experience: {},
};

const experienceDataSlice = createSlice({
  name: "experienceData",
  initialState,
  reducers: {
    updateExperience: (state, action) => {
      const { field, value } = action.payload;
      state.experience[field] = value;
    },
  },
});

export const { updateExperience } = experienceDataSlice.actions;
export default experienceDataSlice.reducer;
