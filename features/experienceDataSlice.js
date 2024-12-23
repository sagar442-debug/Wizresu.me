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
      const { num, field, value } = action.payload;

      // Ensure the experience array has enough elements for the index
      if (state.experience[num]) {
        // If the index exists, update the field
        state.experience[num][field] = value;
      } else {
        // If the index doesn't exist, add empty objects as needed
        while (state.experience.length <= num) {
          state.experience.push({});
        }
        state.experience[num][field] = value;
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
