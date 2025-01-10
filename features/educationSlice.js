import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  education: [
    {
      institution: "",
      degree: "",
      startYear: "",
      endYear: "",
      location: "",
      summary: "",
    },
  ],
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducation: (state) => {
      state.education.push({
        institution: "",
        degree: "",
        startYear: "",
        endYear: "",
        location: "",
        summary: "",
      });
    },
    removeEducation: (state, action) => {
      state.education = state.education.filter(
        (_, index) => index !== action.payload
      );
    },
    educationChange: (state, action) => {
      const { val, field, value } = action.payload;
      if (state.education[val]) {
        state.education[val][field] = value;
      }
    },
  },
});

export const { addEducation, removeEducation, educationChange } =
  educationSlice.actions;
export default educationSlice.reducer;
