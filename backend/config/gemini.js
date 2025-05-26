import { GoogleGenerativeAI } from "@google/generative-ai";

export const initializeAi = async () => {
  const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAi.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

  return model;
};