import { z } from "zod";
import { contactFormSchema } from "./schemas";

export type ContactFormType = z.infer<typeof contactFormSchema>;
