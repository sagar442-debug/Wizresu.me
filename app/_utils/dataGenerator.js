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
  const setLoadingChat = useStore((state) => state.setLoadingChat);
  // Function to generate data using GoogleGenerativeAI
  const generateData = async () => {
    setLoadingChat(true);
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      temperature: 0,
    });
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
- **objective**: A brief career objective linking the user's passion and target job responsibilities which should have no more than 300 characters.
- **skills**: An array of 12-16 relevant, ATS-optimized skills related to the job description.
- **jobExperience**: An array where each item is an object with:
  - **jobTitle**: Provided job title.
  - **companyName**: Provided company name.
  - **userRoleDescription**: An array of 3-5 bullet points summarizing key responsibilities and achievements from jobDescription.
  - **startDate**: Provided start date (jobStartDate).
  - **endDate**: Provided end date (jobEndDate).

Return only the JSON object, and do not include additional commentary, backticks, or brackets around the output. Use placeholder values only for missing data, and ensure the JSON format maximizes ATS compatibility with the job details. To get the most ats friendly result please take following into consideration:

Tailored Length: While the ideal length varies, aim for a concise and impactful resume.
Prioritize Relevant Experience: Focus on experiences directly related to the job you're applying for.
Strong Action Verbs: Use strong action verbs (e.g., "achieved," "implemented," "led") to highlight your accomplishments.
Measurable Achievements: Quantify your achievements whenever possible (e.g., "Increased sales by 20%").
Avoid Complex Language: Use simple, clear language that's easy for the ATS to understand.

`;

    try {
      const result = await model.generateContent(prompt);
      const resultText = result.response.text();
      const cleanedText = resultText.replace("generatedText: ", "");
      const parsedData = await JSON.parse(cleanedText);
      setChatOutput(parsedData);
      setLoadingChat(false);
    } catch (error) {
      console.error("Failed to generate data:", error);
      setLoadingChat(false);
    }
  };

  // Optionally, return the function if you want to allow manual triggering
  return { generateData };
};
