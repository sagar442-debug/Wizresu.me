import { useEffect, useState } from "react";
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
  const setChatOutput = useStore((state) => state.setChatOutput);
  const chatOutput = useStore((state) => state.chatOutput);
  const [geminiData, setGeminiData] = useState();

  // Function to generate data using GoogleGenerativeAI
  const generateData = async () => {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `The user ${userFullName} is a ${userDegree} graduate with a passion for ${jobTitle}. They have experience with following details: ${jobExperience}. They are fluent in ${userLanguage} and currently reside at ${userAddress}. They are looking for a job that will allow them to do the following job description ${jobDescription}. Now provide me a json object with the following keys: objective, skills(must be relevant with the job description and should be between 12-16 words only),jobExperience in an array with each experience being in an object inside where there should jobTitle,companyName, userRoleDescription inside which there should be an array of each item being a bullet point of at least 4 for the persons role. Do not provide any additional text before and provide it like this generatedText: {put json here}. Also do not provide any brackets please!!. Also make sure to have the highest possible ATS score for the job detail provided since I'll be using this to make a new resume. If there is nothing to provide then just give random placeholder json.`;

    // const jobExperiences =
    //   " Enabled customers to create rotating and pinned cards to provide engaging and actionable experiences on Alexa enterprise devices.Expanded metrics for a customer console to provide inputs on performance improvement and feature priorities.Migrated legacy services to AWS CDK which enables usage of modern internal tools and reduces operational overhead for the team.Migrated bare-metal Kotlin services to AWS cloud platform while significantly improving operational monitoring, reliability during transient issues and integration testing.Removed customer frustrations by continuously driving critical QA issues to zero as the team's QA champion.Lead regular analysis and retrospective sessions for high severity and customer facing events to drive outages to zero.Drove operational excellence projects such as an end-to-end device testing setup to improve defect detection and reduce defect rate.Routinely work with external teams remotely to resolve feature requests and troubleshoot cross-service problems.Supported and mentored interns to maximize their learnings and empower them to be successful in their intern projects";
    // const jobRoleDescription = `
    // DevOps Software Engineer Role Summary Help make faster sales, finance, and business decisions with GenAI-powered data analysis.Liquid Analytics seeks a talented DevOps Software Engineer with a Computer Science degree and at least 5 years of production experience. The ideal candidate is proficient in building automation tools and Kubernetes operators using Go and has hands-on experience with CI/CD infrastructure-as-code using Python, TypeScript, JavaScript, AWS CDK, Helm charts, and GitOps practices.The role demands a strong  of AWS services, networking, Kubernetes, cloud security, and ARM/x86 architecture.The position requires maintaining 24/7 cloud product stability, optimizing resource utilization, and effectively addressing customer issues. Experience with GitOps tools and methodologies is crucial for streamlining deployments and ensuring consistent infrastructure management.Observability with Grafana and Prometheus: monitoring, alerts, logging. Excellent communication skills and a drive for continuous improvement are essential.You live where we work. You can come into our offices near Thornbury, Ontario, any day of the week as required. Start by visiting our website.Located within 40 minutes of Thornbury, Ontario, this role offers more than just a career opportunity—it’s a chance to work in a town surrounded by nature, where you can enjoy clean air and water in a beautiful environment. You are willing to locate yourself within 40 minutes of our offices so that you can come into the office at any time. Qualifications With three (5+) years of experience, you are vital in the following areas:Javascript / Typescript / Python with dbtAutomated testing toolsCI/CD pipelines with GitOps experience deploying monoreposFamiliarity with tools like Helm charts, CDK, and other GitOps toolsAWS Cloud Linux NetworkingKubernetesSolid understanding of AWS services and tools SQL and NoSQL databasesAPIs: REST, gRPC, Sockets, Web SocketsCloud SecurityExcellent written and spoken English language skills Mocha or equivalent for automated testing, such as Playwright
    // Degree in Computer Science or a related field Join Team Liquid and have fun building exceptional experiences for the modern data stack.`;

    // const prompt = `The user Sagar Sapkota is a Software engineer graduate with a passion for Software engineering. They have experience with following details: ${jobExperiences}. They are fluent in English and currently reside at Canada. They are looking for a job that will allow them to do the following job description ${jobDescription}. Now provide me a json object with the following keys: objective, skills(must be relevant with the job description and should be between 12-16 words only),jobExperience in an array with each experience being in an object inside where there should jobTitle,companyName, userRoleDescription inside which there should be an array of each item being a bullet point for the persons role. Do not provide any additional text before and provide it like this {put json here}. Also do not provide any brackets please!!. Also make sure to have the highest possible ATS score for the job detail provided since I'll be using this to make a new resume. If there is nothing to provide then just give random placeholder json.`;

    try {
      const result = await model.generateContent(prompt);
      const resultText = result.response.text();
      const cleanedText = resultText.replace("Generated Data: ", "");
      const parsedData = JSON.parse(cleanedText);
      setChatOutput(parsedData);
      console.log(chatOutput);
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
