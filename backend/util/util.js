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
