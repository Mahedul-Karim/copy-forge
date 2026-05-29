import jwt from "jsonwebtoken";

export const generateToken = (data, secret) => {
  return jwt.sign(data, secret, {
    expiresIn: "1d",
  });
};

export function extractHTMLContent(raw) {
  return raw
    .trim()
    .replace(/^```html\s*/, "")
    .replace(/```$/, "");
}

export const safeJsonParse = (text) => {
  try {
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);
  } catch (err) {
    console.error("Failed JSON parse:", text);
    throw err;
  }
};