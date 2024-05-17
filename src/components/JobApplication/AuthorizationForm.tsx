import { useAppSelector } from "@/store/hooks";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Montserrat } from "next/font/google";
import { useForm } from "react-hook-form";
import FormNavButtons from "./FormNavButtons";
import { authorizationSignatureSchema } from "./schemas";
import { AuthorizationSignatureType } from "./types";

const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const defaultValues = {
  signature: "",
  signDate: format(new Date(), "MM/dd/yyyy"),
};

export default function AuthorizationForm() {
  const {
    personalDetails,
    contactInfo,
    additionalInfo,
    employmentHistory,
    educationHistory,
    certifications,
  } = useAppSelector((state) => state.persistedReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthorizationSignatureType>({
    defaultValues,
    resolver: zodResolver(authorizationSignatureSchema),
  });

  function onSubmit(data: AuthorizationSignatureType) {
    const formData = {
      personalDetails,
      contactInfo,
      additionalInfo,
      employmentHistory,
      educationHistory,
      certifications,
      authorization: data,
    };

    // TODO: Send formData to email
    alert(JSON.stringify(formData));
  }

  return (
    <Stack as="form" spacing={8} onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h2" fontFamily={montserrat.style.fontFamily} fontSize="2xl">
        Authorization
      </Heading>
      <Text fontSize="sm">
        I certify that all answers given herein are true and complete to the
        best of my knowledge. I authorize investigation of all statements
        contained in this application for employment as may be necessary in
        arriving at an employment decision. I understand that if any information
        contained on this application is found to be fraudulent or intentionally
        misleading, my application for employment shall be void, and I shall be
        disqualified from employment eligibility. I further understand that any
        offer of employment is contingent upon successful completion of a
        BCI/FBI Background check and instant database and/or registry
        screenings.
      </Text>
      <Text fontSize="sm">
        I authorize Creative Living Services to thoroughly investigate my
        references, work record, education and other matters related to my
        suitability for employment. In addition, I release Creative Living
        Services my former employers and all other persons, corporations,
        partnerships and associations from any and all claims, demands or
        liabilities arising out of or in any way related to such investigation
        or disclosure.
      </Text>
      <Text fontSize="sm">
        I understand that nothing contained in the application or conveyed
        during any interview constitutes a guarantee or contract of employment
        between Creative Living Services and myself. In addition, I understand
        and agree that if I am employed, my employment is at will, and may be
        terminated at any time, with or without prior notice, at the option of
        either myself or Creative Living Services.
      </Text>
      <Text fontSize="sm" fontWeight="bold">
        With my electronic signature, I attest I have provided full and accurate
        information, and have read, understand and agree to the above terms.
      </Text>

      <SimpleGrid columns={6} gap={4}>
        <FormControl gridColumn="1 / span 4" isInvalid={!!errors.signature}>
          <FormLabel fontSize="sm">Signature</FormLabel>
          <Input {...register("signature")} />
          {errors.signature && (
            <FormErrorMessage>{errors.signature.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl gridColumn="5 / span 2">
          <FormLabel fontSize="sm">Date</FormLabel>
          <Input {...register("signDate")} isDisabled />
        </FormControl>
      </SimpleGrid>

      <FormNavButtons />
    </Stack>
  );
}