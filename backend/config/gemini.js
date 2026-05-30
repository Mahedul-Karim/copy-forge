import { GoogleGenerativeAI } from "@google/generative-ai";

let model = null;

export const initializeAi = async () => {
  if (model) return model;

  const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  model = genAi.getGenerativeModel({
    model: "gemini-3.5-flash",
  });

  return model;
};
