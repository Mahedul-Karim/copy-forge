import { Content } from "../model/contents.js";
import { asyncWrapper } from "../util/asyncWrapper.js";

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
