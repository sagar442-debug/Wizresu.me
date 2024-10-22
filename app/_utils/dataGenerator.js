import { GoogleGenerativeAI } from "@google/generative-ai";

const DataGenerator = async () => {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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
