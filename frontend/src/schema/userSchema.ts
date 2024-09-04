import { z } from "zod";

export const firstNameSchema = z
  .string()
  .min(1, "First name is required")
  .max(100, "First name cannot exceed 100 characters")
  .regex(/^[A-Za-z]+$/, "First name must contain only alphabetical characters");

export const lastNameSchema = z
  .string()
  .min(1, "Last name is required")
  .max(100, "Last name cannot exceed 100 characters")
  .regex(/^[A-Za-z]+$/, "Last name must contain only alphabetical characters");

export const emailIdSchema = z.string().email("Invalid email address");

export const querySchema = z.object({
  page: z.string().regex(/^\d+$/).transform(Number).optional(),
});
