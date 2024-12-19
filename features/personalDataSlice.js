import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  linkedInProfile: "",
  phoneNumber: "",
  portfolioWebsite: "",
  githubProfile: "",
  additionalLink: "",
};

const personalDataSlice = createSlice({
  name: "personalData",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { updateField } = personalDataSlice.actions;
export default personalDataSlice.reducer;
