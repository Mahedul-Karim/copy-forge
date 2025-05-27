import { v2 as cloudinary } from "cloudinary";

const configCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
};

const uploadToCloudinary = async (file) => {
  const fileBuffer = `data:${file.mimetype};base64,${file.buffer.toString(
    "base64"
  )}`;

  return await cloudinary.uploader.upload(fileBuffer, {
    folder: "copy-forge",
  });
};

const deleteFromCloudinary = async (publicId) => {
  await cloudinary.uploader.destroy(publicId);
};

export { configCloudinary, uploadToCloudinary, deleteFromCloudinary };