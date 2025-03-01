import { z } from "zod";

export const schemaSign = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Email is invalid",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(5, { message: " Password must be at least 5 characters" }),
});
