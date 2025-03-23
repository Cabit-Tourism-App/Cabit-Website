import { z } from "zod"

export const signInSchema = z.object({
  email: z.string().email(),
  user_password: z.string().min(1),
})

export const signUpSchema = z.object({
  user_name: z.string().min(1),
  email: z.string().email(),
  user_phone: z.string().min(10).max(15),
  user_password: z.string().min(8),
});