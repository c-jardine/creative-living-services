import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { saveAdditionalInfo } from "@/store/reducers";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, Path, useForm } from "react-hook-form";
import { Heading } from "../Heading";
import { useStepperContext } from "./context";
import FormNavButtons from "./FormNavButtons";
import { additionalInfoSchema } from "./schemas";
import { AdditionalInfoType } from "./types";

export default function AdditionalInfoForm() {
  const {
    stepper: { goToNext },
  } = useStepperContext();

  const additionalInfoState = useAppSelector(
    (state) => state.persistedReducer.additionalInfo
  );
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AdditionalInfoType>({
    defaultValues: additionalInfoState,
    resolver: zodResolver(additionalInfoSchema),
  });

  function onSubmit(data: AdditionalInfoType) {
    dispatch(saveAdditionalInfo(data));
    goToNext();
  }

  function RadioField({
    children,
    name,
  }: {
    children: React.ReactNode;
    name: Path<AdditionalInfoType>;
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
      <Heading as="h2" fontSize="2xl">
        Additional Information
      </Heading>
      <Stack spacing={4}>
        <FormControl
          gridColumn="1 / span 3"
          isInvalid={!!errors.driversLicense}
        >
          <FormLabel fontSize="sm">Driver&apos;s license number</FormLabel>
          <Input {...register("driversLicense")} />
          {errors.driversLicense && (
            <FormErrorMessage>{errors.driversLicense.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          gridColumn={{ md: "1 / span 3" }}
          isInvalid={!!errors.isFelon}
        >
          <RadioField name="isFelon">
            Have you ever been convicted of a felony?
          </RadioField>
          {errors.isFelon && (
            <FormErrorMessage>{errors.isFelon.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          gridColumn={{ md: "1 / span 3" }}
          isInvalid={!!errors.isAuthorizedToWork}
        >
          <RadioField name="isAuthorizedToWork">
            Can you show proof of authorization to work in the United States?
          </RadioField>
          {errors.isAuthorizedToWork && (
            <FormErrorMessage>
              {errors.isAuthorizedToWork.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          gridColumn={{ md: "1 / span 3" }}
          isInvalid={!!errors.isWillingToBackgroundCheck}
        >
          <RadioField name="isWillingToBackgroundCheck">
            Are you willing to consent to a criminal background check?
          </RadioField>
          {errors.isWillingToBackgroundCheck && (
            <FormErrorMessage>
              {errors.isWillingToBackgroundCheck.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          gridColumn={{ md: "1 / span 3" }}
          isInvalid={!!errors.isFormerApplicant}
        >
          <RadioField name="isFormerApplicant">
            Have you previously applied to work at one of our companies before?
            <Text as="span" fontSize="xs" fontStyle="italic">
              (Includes Freedom Life Residential, and/or New Wayz Residential)
            </Text>
          </RadioField>
          {errors.isFormerApplicant && (
            <FormErrorMessage>
              {errors.isFormerApplicant.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          gridColumn={{ md: "1 / span 3" }}
          isInvalid={!!errors.isDriver}
        >
          <RadioField name="isDriver">
            Are you a licensed driver with a car available?
          </RadioField>
          {errors.isDriver && (
            <FormErrorMessage>{errors.isDriver.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          gridColumn={{ md: "1 / span 3" }}
          isInvalid={!!errors.isGraduate}
        >
          <RadioField name="isGraduate">
            Have you obtained a high school diploma or GED?
          </RadioField>
          {errors.isGraduate && (
            <FormErrorMessage>{errors.isGraduate.message}</FormErrorMessage>
          )}
        </FormControl>
      </Stack>

      <FormNavButtons />
    </Stack>
  );
}
