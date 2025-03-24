import { VERCEL_PROJECT_PRODUCTION_URL } from "@/config/common";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isProduction(): boolean {
  return VERCEL_PROJECT_PRODUCTION_URL === "production";
}

const isObject = (value: any): Boolean =>
  value !== null && typeof value === "object";

export default isObject;

export function camelToFlat(text: string) {
  const regularCase = text.replace(/([a-z])([A-Z])/g, "$1 $2");
  return regularCase;
}

export const baseURL =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL(
        `https://${
          process.env.VERCEL_PROJECT_PRODUCTION_URL ||
          "your-production-domain.com"
        }`
      );
