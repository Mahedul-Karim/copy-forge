import { Content } from "../model/contents.js";
import { asyncWrapper } from "../util/asyncWrapper.js";
import AppError from "../config/error.js";
import { Stats } from "../model/stats.js";
import { initializeAi } from "../config/gemini.js";
import { extractHTMLContent } from "../util/util.js";
import { runWorkflow } from "../ai/runWorkflow.js";

export const getRecentContents = asyncWrapper(async (req, res, next) => {
  const userId = req.user._id;

  const contents = await Content.find({ creator: userId }).sort({
    createdAt: -1,
  });

  res.status(200).json({
    success: true,
    contents,
  });
});

export const generateContent = asyncWrapper(async (req, res, next) => {
  const userId = req.user._id;

  const { topic, keywords, language, writingStyle, workflow } = req.body;

  if (!topic || !language || !writingStyle || !workflow) {
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
        400,
      ),
    );
  }

  if (totalContentUsed >= totalContentLimit) {
    return next(
      new AppError(
        "You have reached total content creation limitaion for your package. Upgrade package or wait for monthly resets",
        401,
      ),
    );
  }

  const workflowResults = await runWorkflow({
    topic,
    keywords,
    language,
    writingStyle,
    workflow,
  });

  stats.usage.dailyLimitUsed = dailyLimitUsed + 1;
  stats.usage.totalContentUsed = totalContentUsed + 1;

  const cleanedContent = extractHTMLContent(workflowResults?.blog);

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
    outputs: {
      blog: cleanedContent,
      seo: workflowResults?.seo,
      linkedin: workflowResults?.linkedin,
      twitter: workflowResults?.twitter,
    },
  });

  stats.createdContents.push(newContent._id);
  stats.usage.saveLimitUsed = saveLimitUsed + 1;
  await stats.save();

  res.status(201).json({
    success: true,
    content: newContent,
  });
});

export const getSingleContent = asyncWrapper(async (req, res, next) => {
  const { documentId } = req.params;

  const content = await Content.findById(documentId);

  if (!content) {
    return next(new AppError("No contents found for this id", 404));
  }

  res.status(200).json({
    success: true,
    content,
  });
});

export const updateDocument = asyncWrapper(async (req, res) => {
  const { documentId } = req.params;

  const data = req.body;

  await Content.findByIdAndUpdate(documentId, {
    ...data,
  });

  res.status(200).json({
    success: true,
    message: "Document updated successfully",
  });
});
