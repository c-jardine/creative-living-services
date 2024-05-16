import { z } from "zod";

export const personalDetailsSchema = z.object({
  firstName: z.string().min(1, "Required"),
  middleInitial: z.string().max(1, "Only 1 character allowed"),
  lastName: z.string().min(2, "Required"),
  birthday: z.string().date(),
  isOver18: z.union([
    z.literal("Yes", { errorMap: () => ({ message: "Required" }) }),
    z.literal("No", { errorMap: () => ({ message: "Required" }) }),
  ]),
});

export const contactInfoSchema = z.object({
  addressLine1: z.string().min(1, "Required"),
  addressLine2: z.string(),
  city: z.string().min(1, "Required"),
  state: z
    .string()
    .min(2, "Required")
    .max(2, "Use abbreviation (ie. OH, MI, etc.)"),
  zipCode: z.string().min(5, "Required"),
  email: z.string().min(1, "Required").email(),
  phone: z.string().min(1, "Required"),
  additionalPhone: z.string(),
});

export const additionalInfoSchema = z.object({
  driversLicense: z.string().min(1, "Required"),
  isFelon: z.union([
    z.literal("Yes", { errorMap: () => ({ message: "Required" }) }),
    z.literal("No", { errorMap: () => ({ message: "Required" }) }),
  ]),
  isAuthorizedToWork: z.union([
    z.literal("Yes", { errorMap: () => ({ message: "Required" }) }),
    z.literal("No", { errorMap: () => ({ message: "Required" }) }),
  ]),
  isWillingToBackgroundCheck: z.union([
    z.literal("Yes", { errorMap: () => ({ message: "Required" }) }),
    z.literal("No", { errorMap: () => ({ message: "Required" }) }),
  ]),
  isFormerApplicant: z.union([
    z.literal("Yes", { errorMap: () => ({ message: "Required" }) }),
    z.literal("No", { errorMap: () => ({ message: "Required" }) }),
  ]),
  isDriver: z.union([
    z.literal("Yes", { errorMap: () => ({ message: "Required" }) }),
    z.literal("No", { errorMap: () => ({ message: "Required" }) }),
  ]),
  isGraduate: z.union([
    z.literal("Yes", { errorMap: () => ({ message: "Required" }) }),
    z.literal("No", { errorMap: () => ({ message: "Required" }) }),
  ]),
});

export const employmentHistorySchema = z.object({
  employmentHistory: z.array(
    z.object({
      position: z.string().min(1, "Required"),
      startDate: z.string().date(),
      endDate: z.string().date(),
      company: z.string().min(1, "Required"),
      phone: z.string(),
      address: z.string(),
      city: z.string(),
      state: z.string(),
      zipCode: z.string(),
      supervisorName: z.string(),
      supervisorNumber: z.string(),
      salary: z.string(),
      weeklyHours: z.string(),
      duties: z.string(),
      reasonForLeaving: z.string(),
    })
  ),
});

export const educationHistorySchema = z.object({
  educationHistory: z.array(
    z.object({
      institution: z.string().min(5, "Required"),
      name: z.string().min(1, "Required"),
      degree: z.string().min(1, "Required"),
      city: z.string().min(1, "Required"),
      state: z.string().min(1, "Required"),
      isComplete: z.union([
        z.literal("Yes", { errorMap: () => ({ message: "Required" }) }),
        z.literal("No", { errorMap: () => ({ message: "Required" }) }),
      ]),
    })
  ),
});

export const certificationsSchema = z.object({
  hasCPR: z.union([
    z.literal("Yes", { errorMap: () => ({ message: "Required" }) }),
    z.literal("No", { errorMap: () => ({ message: "Required" }) }),
  ]),
  hasFirstAid: z.union([
    z.literal("Yes", { errorMap: () => ({ message: "Required" }) }),
    z.literal("No", { errorMap: () => ({ message: "Required" }) }),
  ]),
  hasOralTopical: z.union([
    z.literal("Yes", { errorMap: () => ({ message: "Required" }) }),
    z.literal("No", { errorMap: () => ({ message: "Required" }) }),
  ]),
  other: z.string(),
});

export const authorizationSignatureSchema = z.object({
  signature: z.string().min(1, "Required"),
  signDate: z.string(),
});

const jobApplicationSchema = [
  personalDetailsSchema,
  contactInfoSchema,
  additionalInfoSchema,
  employmentHistorySchema,
  educationHistorySchema,
  authorizationSignatureSchema,
];

export default jobApplicationSchema;
