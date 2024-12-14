import { useEffect, useState } from "react";
import useStore from "@/store/useStore";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SchemaType } from "@google/generative-ai";

export const useAtsCalculator = () => {
  const jobTitle = useStore((state) => state.jobTitle);
  const jobDescription = useStore((state) => state.jobDescription);
  const userFullName = useStore((state) => state.userFullName);
  const userAddress = useStore((state) => state.userAddress);
  const userDegree = useStore((state) => state.userDegree);
  const userLanguage = useStore((state) => state.userLanguage);
  const jobExperience = useStore((state) => state.jobExperience);
  const chatOutput = useStore((state) => state.chatOutput);
  const atsScore = useStore((state) => state.atsScore);
  const setAtsScore = useStore((state) => state.setAtsScore);
  const resumeScanData = useStore((state) => state.resumeScanData);
  const setResumeScanData = useStore((state) => state.setResumeScanData);
  const [geminiData, setGeminiData] = useState(null);
  const setLoadingChat = useStore((state) => state.setLoadingChat);

  const generateAtsScore = async (resume) => {
    setLoadingChat(true);
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const schema = {
      description:
        "ATS score and keyword relevance based on job description and resume comparison",
      type: SchemaType.OBJECT,
      properties: {
        keywords: {
          type: SchemaType.ARRAY,
          description: "List of keywords extracted from job description",
          items: {
            type: SchemaType.OBJECT,
            properties: {
              keyword: {
                type: SchemaType.STRING,
                description: "The keyword extracted from the job description",
                nullable: false,
              },
              weight: {
                type: SchemaType.NUMBER,
                description: "The weight or importance of the keyword",
                nullable: false,
              },
              resumePresence: {
                type: SchemaType.BOOLEAN,
                description:
                  "Indicates whether the keyword is present in the user's resume",
                nullable: false,
              },
              score: {
                type: SchemaType.NUMBER,
                description:
                  "The score assigned to the keyword based on its presence and relevance",
                nullable: false,
              },
            },
            required: ["keyword", "weight", "resumePresence", "score"],
          },
        },
        totalScore: {
          type: SchemaType.NUMBER,
          description:
            "The total score calculated based on keywords and their presence in the resume",
          nullable: false,
        },
        percentageMatch: {
          type: SchemaType.NUMBER,
          description:
            "The percentage match between the resume and the job description",
          nullable: false,
        },
      },
      required: ["keywords", "totalScore", "percentageMatch"],
    };
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    // const prompt = `
    //   I'll provide the job description.
    //   You'll analyze the job description and extract the top keywords.
    //   You'll assign a weight or score to each keyword based on its importance.
    //   I'll provide my resume in JSON which is ${JSON.stringify(resume)}.
    //   You'll compare my resume to the keywords and their weights.
    //   You'll calculate a total score based on the presence and relevance of the keywords in my resume in percent.
    //   Provide me a JSON with relevant keywords and a total score do not provide any other text since I am only using JSON for my web app please.
    // `;
    const prompt = `
    I will provide you with a job description and a resume in JSON format. Your task is to:
    
    1. Analyze the job description to identify **critical skills, technologies, and qualifications** explicitly mentioned in the text.
    2. Extract only the **most relevant keywords or phrases** which should be 40 keywords that directly reflect the requirements of the job description. Each keyword must align with the specific skills, technologies, or experiences outlined in the job posting. Also penalize for not having the keyword please.
    3. For each extracted keyword, perform a **strict comparison** with the resume:
       - Count a match **only if the keyword is explicitly mentioned** in the resume with a relevant context. For example, "Python" in the job description matches only if "Python" appears in the resume with evidence of experience.
       - Assign a weight (1-10) based on the importance of the keyword in the job description.
    4. Generate a total ATS score as a percentage, considering:
       - The weighted match of keywords.
       - The strict relevancy of experiences, technologies, and skills.
  
    Constraints:
    - If a skill or qualification is partially mentioned or implied in the resume but lacks sufficient context (e.g., "used Python" vs. "proficient in Python"), it should not count as a match.
    - Your response must be in **valid JSON format only**. Do not include any additional explanations or text.
  
    Here is my resume in JSON format:
    ${JSON.stringify(resume)}
  
    Provide the output strictly in this format:
    {
      "keywords": [
        {
          "keyword": "example keyword",
          "weight": 5,
          "resumePresence": true,
          "score": 5
        }
      ],
      "totalKeywordWeight": 100,
      "userKeywordsWeight":20,
      "percentageMatch": 20
      "recommendedKeywords":["","",""],
      "recommendedSentences:["","","","","","",""]

    }

    The recommended sentences should be the sentences user should include in their resume which are only relevant to their previous work experience.

 **High priority: if the same resume was provided provide the same output each time.**        

  `;

    try {
      const result = await model.generateContent(prompt); // Check API docs for exact usage
      const resultText =
        result?.response?.candidates?.[0]?.content?.parts?.[0]?.text;
      const cleanedResultText = resultText.replace(/```json|```/g, "").trim();
      if (!resultText) {
        console.warn("No valid content found in the model response.");
        return;
      }
      const jsonData = JSON.parse(cleanedResultText);
      setGeminiData(resultText);
      setResumeScanData(jsonData);
      console.log("Generated Data:", jsonData);
      const total = jsonData.keywords.reduce(
        (total, item) => total + item.weight,
        0
      );
      const userScore = jsonData.keywords.reduce((total, item) => {
        if (item.resumePresence) {
          return total + item.weight;
        }
        return total;
      }, 0);

      let matchPercent = (userScore / total) * 100;
      //   console.log("Total weight", total);
      //   console.log("User score", userScore);
      console.log("Match Percent", matchPercent);
      setLoadingChat(false);
      return jsonData;
      setAtsScore(jsonData.percentageMatch);
    } catch (error) {
      console.error("Failed to generate ATS data:", error);
      setLoadingChat(false);
    }
  };

  return { generateAtsScore, geminiData };
};
