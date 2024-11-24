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

  const generateAtsScore = async () => {
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
      return jsonData;
      setAtsScore(jsonData.percentageMatch);
    } catch (error) {
      console.error("Failed to generate ATS data:", error);
    }
  };

  return { generateAtsScore, geminiData };
};

const resume = {
  resumeDetails: {
    _id: "673925b0ecb80780bb60f743",
    clerkId: "user_2ox22hWvPkBc0FGql9cxd26eRAD",
    resumeTitle: "Software Developer 2",
    jobTitle: "Software Engineer",
    userFullName: "John Doe",
    userEmailAddress: "john.doe@example.com",
    userPhoneNumber: "123-456-7890",
    userWebsite: "https://sagarspk.com.np",
    userAddress: "123 Main Street, Anytown, CA 12345",
    userDegree: ["Bachelor of Science in Computer Science"],
    jobDescription: `About the job
Role Summary


Build reactive database web applications 



Liquid Analytics is seeking a Senior JavaScript Svelte developer with at least 5 years of experience.

You excel at creating pixel-perfect UI and have a deep understanding of colour, typography, layout, and user experience design.
As a full-stack developer, you will own end-to-end features and build front-end and server-side components. You have a solid understanding of Python and SQL, the language of data.
You are adept at real-time web applications using web sockets and WASM. You have strong networking skills, API development (REST, gRPC), and cloud deployment.
Proficiency with tools like Git, Visual Studio Code, and CI/CD pipelines is essential.
Mastery in using UX design tools such as Figma is also required.
You can build and manage your deployments and you can troubleshoot networking issues in the AWS cloud.
You live where we work.  You can come into our offices near Thornbury, Ontario any day of the week as required.


Start by visiting our website. 



You thrive in a fast-paced environment where delivering functional, user-centric features is key, and you’re comfortable with client interactions.

Your development process begins with thorough requirement analysis and documentation, ensuring clarity and precision in every project. Experience with GitLab monorepos, build systems, and feature flagging is highly desirable.



Located within 40 minutes of Thornbury, Ontario, this role offers the opportunity to work in an area surrounded by nature. You can enjoy clean air and water in a beautiful environment. You are willing to locate yourself within 40 minutes of our offices so that you can come into the office at any time.



Qualifications

Outstanding knowledge of Python and Javascript
Ability to build real-time web applications with web sockets and WASM
Solid API development experience with REST and gRPC. Experience with CSV, Parquet, JSON, TOML, and YAML data formats
Mastery of state management with web applications
Build reusable product UI Components
Set up, configure, and build Authorization and Authentication into web applications using role/attribute-based access control (RBAC and ABAC)
Solid understanding of SQL. We think of our UX as DX or Data Experience. We use PostgreSQL for transactional data and DuckDB for analytics data
Unit test, test automation, and scalability testing of the front-end application
Solid cloud and networking skills allow you to test and deploy your web application and test harnesses. We use the Playwright and Mocha test frameworks (we are open to other test frameworks)
You are focused on releasing and shipping features
You understand the need for a product team to ship functional features rapidly
You know how to estimate your work
You can build and manage our Gitlab mono repo
English is your first programming language
All code starts with Requirements and Analysis documents
You are at ease talking directly with clients and users
You are an expert at using UX design tools such as Figma`,
    userLanguage: [
      {
        English: "99",
      },
    ],
    jobExperience: [
      {
        jobCompany: "Tech Solutions Inc.",
        jobTitle: "Software Developer",
        jobStartDate: "January 2020",
        jobEndDate: "Present",
        jobDescription: [
          "Designed and implemented new features for the company's core software product.",
          "Collaborated with cross-functional teams to define project requirements and deliver solutions on time.",
          "Optimized codebase to improve performance and reduce memory usage.",
        ],
      },
      {
        jobCompany: "Innovate Labs",
        jobTitle: "Junior Developer",
        jobStartDate: "June 2018",
        jobEndDate: "December 2019",
        jobDescription: [
          "Assisted in the development of web applications using JavaScript and Python.",
          "Maintained code quality through regular testing and debugging.",
          "Wrote documentation to streamline knowledge sharing among team members.",
        ],
      },
    ],
  },
};
