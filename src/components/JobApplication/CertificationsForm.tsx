import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { saveCertifications } from "@/store/reducers";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Montserrat } from "next/font/google";
import { Controller, Path, useForm } from "react-hook-form";
import { useStepperContext } from "./context";
import FormNavButtons from "./FormNavButtons";
import { certificationsSchema } from "./schemas";
import { CertificationsType } from "./types";

const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function CertificationsForm() {
  const {
    stepper: { goToNext },
  } = useStepperContext();

  const certificationsState = useAppSelector(
    (state) => state.persistedReducer.certifications
  );
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CertificationsType>({
    defaultValues: certificationsState,
    resolver: zodResolver(certificationsSchema),
  });

  function onSubmit(data: CertificationsType) {
    dispatch(saveCertifications(data));
    goToNext();
  }

  function RadioField({
    children,
    name,
  }: {
    children: React.ReactNode;
    name: Path<CertificationsType>;
  }) {
    return (
      <HStack
        spacing={4}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Text fontSize="sm">{children}</Text>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <RadioGroup mt={0.5} onChange={onChange} value={value}>
              <HStack spacing={4}>
                <Radio value="Yes">
                  <Text fontSize="xs">Yes</Text>
                </Radio>
                <Radio value="No">
                  <Text fontSize="xs">No</Text>
                </Radio>
              </HStack>
            </RadioGroup>
          )}
        />
      </HStack>
    );
  }

  return (
    <Stack as="form" spacing={8} onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Heading
          as="h2"
          fontFamily={montserrat.style.fontFamily}
          fontSize="2xl"
        >
          Certifications
        </Heading>
        <Text fontSize="sm">
          You will be required to provide proof of certifications.
        </Text>
      </Stack>
      <Stack spacing={4}>
        <FormControl
          gridColumn={{ md: "1 / span 3" }}
          isInvalid={!!errors.hasCPR}
        >
          <RadioField name="hasCPR">Do you have a CPR certificate?</RadioField>
          {errors.hasCPR && (
            <FormErrorMessage>{errors.hasCPR.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          gridColumn={{ md: "1 / span 3" }}
          isInvalid={!!errors.hasFirstAid}
        >
          <RadioField name="hasFirstAid">
            Do you have a First Aid certificate?
          </RadioField>
          {errors.hasFirstAid && (
            <FormErrorMessage>{errors.hasFirstAid.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          gridColumn={{ md: "1 / span 3" }}
          isInvalid={!!errors.hasOralTopical}
        >
          <RadioField name="hasOralTopical">
            Oral and topical administration?
          </RadioField>
          {errors.hasOralTopical && (
            <FormErrorMessage>{errors.hasOralTopical.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl gridColumn="1 / span 3" isInvalid={!!errors.other}>
          <FormLabel fontSize="sm">
            Have you completed any other training?
          </FormLabel>
          <Textarea {...register("other")} />
          {errors.other && (
            <FormErrorMessage>{errors.other.message}</FormErrorMessage>
          )}
        </FormControl>
      </Stack>

      <FormNavButtons />
    </Stack>
  );
}
