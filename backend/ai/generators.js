import { initializeAi } from "../config/gemini.js";
import { safeJsonParse } from "../util/util.js";
import {
  blogPrompt,
  seoPrompt,
  linkedinPrompt,
  twitterPrompt,
} from "./prompts.js";

export const generateBlog = async ({
  topic,
  keywords,
  language,
  writingStyle,
}) => {
  const model = await initializeAi();

  const prompt = blogPrompt({ topic, keywords, language, writingStyle });

  const result = await model.generateContent(prompt);

  const response = await result.response;

  return response.text();
};

export const generateSEO = async ({ blog }) => {
  const model = await initializeAi();

  const prompt = seoPrompt({ blog });

  const result = await model.generateContent(prompt);

  const response = await result.response;

  return safeJsonParse(response.text());
};

export const generateLinkedIn = async ({
  blog,
  topic,
  writingStyle,
  language,
}) => {
  const model = await initializeAi();

  const prompt = linkedinPrompt({
    blog,
    topic,
    writingStyle,
    language,
  });

  const result = await model.generateContent(prompt);
  const response = await result.response;

  return response.text();
};

export const generateTwitter = async ({ blog, topic, language }) => {
  const model = await initializeAi();

  const prompt = twitterPrompt({ blog, topic, language });

  const result = await model.generateContent(prompt);
  const response = await result.response;

  return response.text();
};
