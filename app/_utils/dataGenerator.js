import { useEffect, useState } from "react";
import useStore from "@/store/useStore";
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
  const setChatOutput = useStore((state) => state.setChatOutput);
  const chatOutput = useStore((state) => state.chatOutput);
  const [geminiData, setGeminiData] = useState();

  // Function to generate data using GoogleGenerativeAI
  const generateData = async () => {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `The user ${userFullName} has a passion for ${jobTitle}. Below is their job experience. Use this data as given, without placeholders unless information is missing.

Job Experience:
${jobExperience
  .map(
    (exp, i) => `Job ${i + 1}:
  jobTitle: ${exp.jobTitle}, 
  companyName: ${exp.jobCompany}, 
  jobStartDate: ${exp.jobStartDate}, 
  jobEndDate: ${exp.jobEndDate}, 
  jobDescription: ${exp.jobDescription}`
  )
  .join("\n")}

The user seeks a role involving: ${jobDescription}. 

Generate a JSON object that reflects the user's experience with the following structure:
- **objective**: A brief career objective linking the user's passion and target job responsibilities which should have at least have 200 characters.
- **skills**: An array of 12-16 relevant, ATS-optimized skills related to the job description.
- **jobExperience**: An array where each item is an object with:
  - **jobTitle**: Provided job title.
  - **companyName**: Provided company name.
  - **userRoleDescription**: An array of 4+ bullet points summarizing key responsibilities and achievements from jobDescription.
  - **startDate**: Provided start date (jobStartDate).
  - **endDate**: Provided end date (jobEndDate).

Return only the JSON object, and do not include additional commentary, backticks, or brackets around the output. Use placeholder values only for missing data, and ensure the JSON format maximizes ATS compatibility with the job details.`;

    try {
      const result = await model.generateContent(prompt);
      const resultText = result.response.text();
      const cleanedText = resultText.replace("generatedText: ", "");
      const parsedData = await JSON.parse(cleanedText);
      setChatOutput(parsedData);
      console.log(parsedData);
    } catch (error) {
      console.error("Failed to generate data:", error);
    }
  };

  // Optionally, return the function if you want to allow manual triggering
  return { generateData };
};
