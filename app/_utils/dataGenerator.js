import { useEffect } from "react";
import useStore from "@/store/useStore"; // Assuming Zustand store is set up this way
import { GoogleGenerativeAI } from "@google/generative-ai";

export const useDataGenerator = () => {
  // Accessing Zustand store values using useStore hook
  const jobTitle = useStore((state) => state.jobTitle);
  const jobDescription = useStore((state) => state.jobDescription);
  const userFullName = useStore((state) => state.userFullName);
  const userAddress = useStore((state) => state.userAddress);
  const userDegree = useStore((state) => state.userDegree);
  const userLanguage = useStore((state) => state.userLanguage);
  const jobExperience = useStore((state) => state.jobExperience);
  console.log(jobExperience);

  // Function to generate data using GoogleGenerativeAI
  const generateData = async () => {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `The user ${userFullName} is a ${userDegree} graduate with a passion for ${jobTitle}. They have experience with following details: ${jobExperience}. They are fluent in ${userLanguage} and currently reside at ${userAddress}. They are looking for a job that will allow them to do the following job description ${jobDescription}. Now provide me a json object with the following keys: userFullName, userDegree, objective, jobExperience in an array with each experience being in an object inside where there should jobTitle,companyName, jobDescription inside which there should be an array of each item being a bullet point for the persons role, skills(must be relevant with the job description and user experience), userLanguage, userAddress. Do not provide any additional text before and after the json object. Also do not provide any brackets please!!. Also make sure to have the highest possible ATS score for the job detail provided since I'll be using this to make a new resume.`;

    try {
      const result = await model.generateContent(prompt);
      console.log("Generated Data:", result.response.text());
    } catch (error) {
      console.error("Failed to generate data:", error);
    }
  };

  // Optionally, use useEffect to trigger the generation automatically when some state changes
  useEffect(() => {
    if (userFullName && jobTitle) {
      generateData();
    }
  }, [userFullName, jobTitle, jobDescription, jobExperience]);

  // Optionally, return the function if you want to allow manual triggering
  return { generateData };
};

// const generateText = async () => {
//   const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   const prompt =
//     "Please provide me the list of skills required for Next js developer position. Provide me a list with a comma after each skill and don't jump on another line just keep on write it in just a sentence without changing line.Also do not mention any additional text before and after the list. I don't need any of your recommendation. Also do not provide any brackets please!!";

//   const result = await model.generateContent(prompt);
//   console.log(result.response.text());
// };
// useEffect(() => {
//   generateText();
// }, []);
