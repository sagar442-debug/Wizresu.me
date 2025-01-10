import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: [{ title: "", skills: "" }],
};

const skillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addSkills: (state, action) => {
      state.skills.push({ title: "", skills: "" });
    },
    removeSkills: (state, action) => {
      state.skills = state.skills.filter(
        (_, index) => index !== action.payload
      );
    },
    skillChange: (state, action) => {
      const { index, field, value } = action.payload;
      state.skills[index][field] = value;
    },
  },
});

export const { addSkills, removeSkills, skillChange } = skillSlice.actions;
export default skillSlice.reducer;
