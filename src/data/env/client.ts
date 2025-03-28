// env.ts
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_HERE_API_KEY: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_HERE_API_KEY: process.env.NEXT_PUBLIC_HERE_API_KEY,  // actual value here
  },
  emptyStringAsUndefined: true,
});
