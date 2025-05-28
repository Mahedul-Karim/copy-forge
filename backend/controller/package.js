import { Package } from "../model/package.js";
import { asyncWrapper } from "../util/asyncWrapper.js";

export const getPackages = asyncWrapper(async (req, res) => {
  const packages = await Package.find();

  res.status(200).json({
    success: true,
    packages,
  });
});
