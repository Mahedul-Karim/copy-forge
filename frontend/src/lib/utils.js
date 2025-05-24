import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formateDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const maskNumber = (number) => {
  const stringedNumber = String(number);

  const last4digit = stringedNumber.slice(-4);

  const maskedNumber = "*".repeat(stringedNumber.length - 4);

  return maskedNumber + last4digit;
};
