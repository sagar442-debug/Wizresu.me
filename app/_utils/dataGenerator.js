import useStore from "@/store/useStore";
import { GoogleGenerativeAI } from "@google/generative-ai";

const DataGenerator = async () => {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const jobTitle = useStore((state) => state.jobTitle);
  const jobDescription = useStore((state) => state.jobDescription);
  const userFullName = useStore((state) => state.userFullName);
  const userAddress = useStore((state) => state.userAddress);
  const userDegree = useStore((state) => state.userDegree);
  const userLanguage = useStore((state) => state.userLanguage);
  const jobExperience = useStore((state) => state.jobExperience);

  const prompt =
    "Please provide me the list of skills required for Next js developer position. Provide me a list with a comma after each skill and don't jump on another line just keep on write it in just a sentence without changing line.Also do not mention any additional text before and after the list. I don't need any of your recommendation. Also do not provide any brackets please!!";

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
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
