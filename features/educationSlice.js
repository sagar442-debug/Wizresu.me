import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  education: [
    { institution: "", degree: "", startYear: "", endYear: "", summary: "" },
  ],
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducation: (state, action) => {
      state.education.push({
        institution: "",
        degree: "",
        startYear: "",
        endYear: "",
        summary: "",
      });
    },
    removeEducation: (state, action) => {
      state.education = state.education.filter(
        (_, index) => index !== action.payload
      );
    },
    educationChange: (state, action) => {
      const { index, field, value } = action.payload;
      state.education[index][field] = value;
    },
  },
});

export const { addEducation, removeEducation, educationChange } =
  educationSlice.actions;
export default educationSlice.reducer;
