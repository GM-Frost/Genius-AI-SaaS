import * as z from "zod"; //form validation

import React from "react";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required",
  }),
});
