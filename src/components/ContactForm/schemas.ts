import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Required"),
  email: z.string().min(1, "Required").email(),
  phone: z.string(),
  message: z.string().min(16, "Required"),
});

export default contactFormSchema;
