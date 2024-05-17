import { phoneMaskOptions, statesList } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { saveContactInfo } from "@/store/reducers";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMaskito } from "@maskito/react";
import { Controller, useForm } from "react-hook-form";
import { Heading } from "../Heading";
import { InputFlag } from "../InputFlag";
import { useStepperContext } from "./context";
import FormNavButtons from "./FormNavButtons";
import { contactInfoSchema } from "./schemas";
import { ContactInfoType } from "./types";

export default function ContactInfoForm() {
  const {
    stepper: { goToNext },
  } = useStepperContext();

  const contactInfoState = useAppSelector(
    (state) => state.persistedReducer.contactInfo
  );
  const dispatch = useAppDispatch();

  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ContactInfoType>({
    defaultValues: contactInfoState,
    resolver: zodResolver(contactInfoSchema),
  });

  const phoneMaskRef = useMaskito({ options: phoneMaskOptions });
  const additionalPhoneMaskRef = useMaskito({ options: phoneMaskOptions });

  function onSubmit(data: ContactInfoType) {
    dispatch(saveContactInfo(data));
    goToNext();
  }

  return (
    <Stack as="form" spacing={8} onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h2" fontSize="2xl">
        Contact Information
      </Heading>
      <SimpleGrid columns={6} gap={4}>
        <FormControl gridColumn="1 / span 6" isInvalid={!!errors.addressLine1}>
          <FormLabel fontSize="sm">Address line 1</FormLabel>
          <Input {...register("addressLine1")} />
          {errors.addressLine1 && (
            <FormErrorMessage fontSize="xs">
              {errors.addressLine1.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl gridColumn="1 / span 6" isInvalid={!!errors.addressLine2}>
          <FormLabel fontSize="sm">Address line 2</FormLabel>
          <Input {...register("addressLine2")} />
          {errors.addressLine2 && (
            <FormErrorMessage fontSize="xs">
              {errors.addressLine2.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl gridColumn="1 / span 4" isInvalid={!!errors.city}>
          <FormLabel fontSize="sm">City</FormLabel>
          <Input {...register("city")} />
          {errors.city && (
            <FormErrorMessage fontSize="xs">
              {errors.city.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl gridColumn="5 / span 2" isInvalid={!!errors.state}>
          <FormLabel fontSize="sm">State</FormLabel>
          <Controller
            control={control}
            name="state"
            render={({ field }) => (
              <Select {...field} placeholder="Choose state...">
                {statesList.map((state, index) => (
                  <option key={index} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </Select>
            )}
          />
          {errors.state && (
            <FormErrorMessage fontSize="xs">
              {errors.state.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl gridColumn="1 / span 6" isInvalid={!!errors.zipCode}>
          <FormLabel fontSize="sm">Zip code</FormLabel>
          <Input {...register("zipCode")} inputMode="numeric" />
          {errors.zipCode && (
            <FormErrorMessage fontSize="xs">
              {errors.zipCode.message}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl gridColumn="1 / span 6" isInvalid={!!errors.email}>
          <FormLabel fontSize="sm">Email</FormLabel>
          <Input
            inputMode="email"
            autoCapitalize="none"
            {...register("email")}
          />
          {errors.email && (
            <FormErrorMessage fontSize="xs">
              {errors.email.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          gridColumn={{ base: "1 /span 6", md: "1 / span 3" }}
          isInvalid={!!errors.phone}
        >
          <FormLabel fontSize="sm">Phone number</FormLabel>
          <Controller
            control={control}
            name="phone"
            render={({ field: { onBlur, value } }) => (
              <InputGroup>
                <Input
                  ref={phoneMaskRef}
                  type="tel"
                  inputMode="tel"
                  onInput={(e) => setValue("phone", e.currentTarget.value)}
                  onBlur={onBlur}
                  value={value}
                />
                <InputRightElement pointerEvents="none">
                  <InputFlag />
                </InputRightElement>
              </InputGroup>
            )}
          />
          {errors.phone && (
            <FormErrorMessage fontSize="xs">
              {errors.phone.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          gridColumn={{ base: "1 / span 6", md: "4 / span 3" }}
          isInvalid={!!errors.additionalPhone}
        >
          <FormLabel fontSize="sm">Additional phone number</FormLabel>
          <Controller
            control={control}
            name="additionalPhone"
            render={({ field: { onBlur, value } }) => (
              <InputGroup>
                <Input
                  ref={additionalPhoneMaskRef}
                  type="tel"
                  inputMode="tel"
                  onInput={(e) =>
                    setValue("additionalPhone", e.currentTarget.value)
                  }
                  onBlur={onBlur}
                  value={value}
                />
                <InputRightElement pointerEvents="none">
                  <InputFlag />
                </InputRightElement>
              </InputGroup>
            )}
          />
          {errors.additionalPhone && (
            <FormErrorMessage fontSize="xs">
              {errors.additionalPhone.message}
            </FormErrorMessage>
          )}
        </FormControl>
      </SimpleGrid>

      <FormNavButtons />
    </Stack>
  );
}
