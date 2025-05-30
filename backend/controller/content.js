import { Content } from "../model/contents.js";
import { asyncWrapper } from "../util/asyncWrapper.js";
import AppError from "../config/error.js";
import { Stats } from "../model/stats.js";
import { initializeAi } from "../config/gemini.js";
import { extractHTMLContent } from "../util/util.js";

export const getRecentContents = asyncWrapper(async (req, res, next) => {
  const userId = req.user._id;

  const contents = await Content.find({ creator: userId })
    .limit(5)
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    contents,
  });
});

export const generateContent = asyncWrapper(async (req, res, next) => {
  const userId = req.user._id;

  const { topic, keywords, language, writingStyle } = req.body;

  if (!topic || !language || !writingStyle) {
    return next(new AppError("Missing required fields", 400));
  }
  if (!Array.isArray(keywords)) {
    return next(new AppError("Keywords must be an array.", 400));
  }

  const stats = await Stats.findOne({ user: userId });

  const { dailyLimitUsed, saveLimitUsed, totalContentUsed } = stats.usage;

  const { dailyLimit, saveLimit, totalContentLimit } = stats.limits;

  if (dailyLimitUsed >= dailyLimit) {
    return next(
      new AppError(
        "You have reached your daily limit for content creation",
        400
      )
    );
  }

  if (totalContentUsed >= totalContentLimit) {
    return next(
      new AppError(
        "You have reached total content creation limitaion for your package. Upgrade package or wait for monthly resets",
        401
      )
    );
  }

  const prompt = `Generate a comprehensive and engaging article on the topic of '${topic}'.
    Incorporate the following keywords naturally: ${
      keywords && keywords.length > 0 ? keywords.join(", ") : "none"
    }.
    The content should be in ${language} and written in a ${writingStyle} tone.
    Ensure the output is in pure HTML string format.
    Crucially, **DO NOT include <html>, <head>, or <body> tags**.
    Only provide the content that would typically go inside the <body>,
    including appropriate HTML tags for headings (e.g., <h1>, <h2>), paragraphs (<p>),
    lists (<ul>, <ol>, <li>), bold (<strong>), italic (<em>), and any other relevant HTML formatting for an article.`;

  const model = await initializeAi();

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const content = response.text();

  stats.usage.dailyLimitUsed = dailyLimitUsed + 1;
  stats.usage.totalContentUsed = totalContentUsed + 1;

  const cleanedContent = extractHTMLContent(content);

  if (saveLimitUsed >= saveLimit) {
    await stats.save();
    return res.status(201).json({
      success: true,
      content: {
        document: cleanedContent,
      },
      message:
        "Your generated content has not been saved because you have already used monthly save limit",
    });
  }

  const newContent = await Content.create({
    topic,
    keywords,
    language,
    writingStyle,
    document: cleanedContent,
    creator: userId,
  });

  stats.createdContents.push(newContent._id);
  stats.usage.saveLimitUsed = saveLimitUsed + 1;
  await stats.save();

  res.status(201).json({
    success: true,
    content: newContent,
  });
});
