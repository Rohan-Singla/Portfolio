import { createHash } from "crypto";

export const COOKIE_NAME = "portfolio-admin-token";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export function generateToken(password: string): string {
  return createHash("sha256").update(`portfolio-admin:${password}`).digest("hex");
}

export function getExpectedToken(): string {
  return generateToken(process.env.ADMIN_PASSWORD ?? "admin123");
}

export function getExpectedCredentials() {
  return {
    username: process.env.ADMIN_USERNAME ?? "admin",
    password: process.env.ADMIN_PASSWORD ?? "admin123",
  };
}
