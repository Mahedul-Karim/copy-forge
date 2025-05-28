import axios from "axios";
import { BASE_URL } from "./utils/constants";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  validateStatus: (status) => status < 510,
});

export const api = async ({ endpoint, options }) => {
  try {
    const { data } = await axiosInstance({
      ...options,
      url: endpoint,
      onUploadProgress: (progress) => {
        let percent = Math.round((progress.loaded * 100) / progress.total);
        console.log(percent);
      },
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("forgeToken") || null}`,
      },
    });

    if (!data.success) {
      throw new Error(data?.message);
    }

    return data;
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "An unknown error occured"
    );
  }
};
