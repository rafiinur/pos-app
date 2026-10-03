import { z } from "zod";

export const Role = z.enum(["ADMIN", "CASHIER"]);
export type Role = z.infer<typeof Role>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
export type LoginInput = z.infer<typeof loginSchema>;
