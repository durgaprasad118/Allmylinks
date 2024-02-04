import { z } from "zod";

export const passwordStrength = (password) => {
  const schema = z
    .string()
    .min(4, { message: "minimum is 4 chars long" })
    .max(6, { message: "must be 5 chars long" });
  const response = schema.safeParse(password);
  return response;
};
export const verifyEmail = (email) => {
  const schema = z.string().email();
  const response = schema.safeParse(email);
  return response;
};

export const verifyString = (str) => {
  const schema = z.string().min(1, { message: "no char" });
  const response = schema.safeParse(str);
  return response;
};
