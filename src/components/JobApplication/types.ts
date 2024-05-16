import { z } from "zod";
import {
  additionalInfoSchema,
  authorizationSignatureSchema,
  certificationsSchema,
  contactInfoSchema,
  educationHistorySchema,
  employmentHistorySchema,
  personalDetailsSchema,
} from "./schemas";

export type PersonalDetailsType = z.infer<typeof personalDetailsSchema>;
export type ContactInfoType = z.infer<typeof contactInfoSchema>;
export type AdditionalInfoType = z.infer<typeof additionalInfoSchema>;
export type EmploymentHistoryType = z.infer<typeof employmentHistorySchema>;
export type EducationHistoryType = z.infer<typeof educationHistorySchema>;
export type CertificationsType = z.infer<typeof certificationsSchema>;
export type AuthorizationSignatureType = z.infer<
  typeof authorizationSignatureSchema
>;
