import { PersonalDetailsType } from "@/components/JobApplication/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { savePersonalDetails } from "@/store/reducers";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Heading } from "../Heading";
import { useStepperContext } from "./context";
import FormNavButtons from "./FormNavButtons";
import { personalDetailsSchema } from "./schemas";

export default function PersonalDetailsForm() {
  const {
    stepper: { goToNext },
  } = useStepperContext();

  const personalDetailsState = useAppSelector(
    (state) => state.persistedReducer.personalDetails
  );
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PersonalDetailsType>({
    defaultValues: personalDetailsState,
    resolver: zodResolver(personalDetailsSchema),
  });

  function onSubmit(data: PersonalDetailsType) {
    dispatch(savePersonalDetails(data));
    goToNext();
  }

  return (
    <Stack as="form" spacing={8} onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h2" fontSize="2xl">
        Personal Details
      </Heading>
      <SimpleGrid columns={3} gap={4}>
        <FormControl gridColumn="1 / span 2" isInvalid={!!errors.firstName}>
          <FormLabel fontSize="sm">First name</FormLabel>
          <Input {...register("firstName")} />
          {errors.firstName && (
            <FormErrorMessage>{errors.firstName.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl gridColumn="3" isInvalid={!!errors.middleInitial}>
          <FormLabel fontSize="sm">Middle initial</FormLabel>
          <Input {...register("middleInitial")} />
          {errors.middleInitial && (
            <FormErrorMessage>{errors.middleInitial.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl gridColumn="1 / span 3" isInvalid={!!errors.lastName}>
          <FormLabel fontSize="sm">Last name</FormLabel>
          <Input {...register("lastName")} />
          {errors.lastName && (
            <FormErrorMessage>{errors.lastName.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl gridColumn="1 / span 3" isInvalid={!!errors.birthday}>
          <FormLabel fontSize="sm">Birthday</FormLabel>
          <Input type="date" {...register("birthday")} />
          {errors.birthday && (
            <FormErrorMessage>{errors.birthday.message}</FormErrorMessage>
          )}
        </FormControl>
      </SimpleGrid>

      <FormNavButtons />
    </Stack>
  );
}
