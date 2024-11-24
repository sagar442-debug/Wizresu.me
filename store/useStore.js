import { create } from "zustand";

// Define your Zustand store
const useStore = create((set) => ({
  // Initial state
  count: 0,
  previousPage: "/dashboard",
  jobTitle: "",
  jobDescription: "",
  userFullName: "",
  userEmailAddress: "",
  userPhoneNumber: "400-600-3000",
  userWebsite: "",
  userAddress: "",
  userDegree: [],
  userLanguage: [],
  jobExperience: [],
  skills: [],
  objective: "",
  chatOutput: {},
  loading: false,
  resumeRef: null,
  initialTap: false,
  atsScore: null,
  resumeScanData: {},

  // Actions to update the state
  setInitialTap: (tap) => set((state) => ({ initialTap: tap })),
  setResumeRef: (ref) => set((state) => ({ resumeRef: ref })),
  setLoading: (loading) => set((state) => ({ loading: loading })),
  setJobTitle: (title) => set((state) => ({ jobTitle: title })),
  setObjective: (objective) =>
    set((state) => ({
      objective: objective,
    })),
  setResumeScanData: (data) =>
    set(() => ({
      resumeScanData: data,
    })),
  setJobDescription: (description) =>
    set((state) => ({ jobDescription: description })),
  setPreviousPage: (page) => set((state) => ({ previousPage: page })),
  setUserFullName: (name) => set((state) => ({ userFullName: name })),
  setUserEmailAddress: (email) => set((state) => ({ userEmailAddress: email })),
  setUserPhoneNumber: (phone) => set((state) => ({ userPhoneNumber: phone })),
  setUserWebsite: (website) => set((state) => ({ userWebsite: website })),
  setUserAddress: (address) => set((state) => ({ userAddress: address })),
  setAtsScore: (score) => set((state) => ({ atsScore: score })),
  setUserDegree: (degree) =>
    set((state) => ({
      userDegree: [
        ...state.userDegree,
        {
          degreeName: degree.degreeName,
          degreeInstitution: degree.degreeInstitution,
          degreeEndDate: degree.degreeEndDate,
          shortDesc: degree.shortDesc,
        },
      ],
    })),
  setSkills: (skill) =>
    set((state) => ({
      skills: state.skills.includes(skill)
        ? state.skills
        : [...state.skills, skill],
    })),
  setUserLanguage: (language) =>
    set((state) => ({
      userLanguage: [
        ...state.userLanguage,
        {
          languageName: language.languageName,
          languagePercentage: language.languagePercentage,
        },
      ],
    })),
  setJobExperience: (job) =>
    set((state) => ({
      jobExperience: [
        ...state.jobExperience,
        {
          jobTitle: job.jobTitle,
          jobCompany: job.jobCompany,
          jobStartDate: job.jobStartDate,
          jobEndDate: job.jobEndDate,
          jobDescription: job.jobDescription,
        },
      ],
    })),
  setChatOutput: (chat) => set((state) => ({ chatOutput: chat })),
}));

export default useStore;
