import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

const projectDataSlice = createSlice({
  name: "projectData",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.experience.push(action.payload);
    },
    updateProject: (state, action) => {
      const { val, field, value } = action.payload;

      if (state.projects[val]) {
        state.projects[val][field] = value;
      } else {
        while (state.projects.length <= val) {
          state.projects.push({});
        }
        state.projects[val][field] = value;
      }
    },
    removeProject: (state, payload) => {
      const { index } = action.payload;
      if (state.projects[index]) {
        state.projects.splice(index, 1);
      }
    },
  },
});

export const { addProject, updateProject, removeProject } =
  projectDataSlice.actions;
export default projectDataSlice.reducer;
