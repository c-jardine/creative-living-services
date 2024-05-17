import { phoneMaskOptions } from "@/constants";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMaskito } from "@maskito/react";
import { Controller, useForm } from "react-hook-form";
import { InputFlag } from "../InputFlag";
import contactFormSchema from "./schemas";
import { ContactFormType } from "./types";

const defaultValues: ContactFormType = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const {
    register,
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormType>({
    defaultValues,
    resolver: zodResolver(contactFormSchema),
  });

  const phoneMaskRef = useMaskito({ options: phoneMaskOptions });

  function onSubmit(data: ContactFormType) {
    alert(JSON.stringify(data));
    reset(defaultValues);
  }

  return (
    <Stack as="form" onSubmit={handleSubmit(onSubmit)} spacing={4}>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel fontSize="sm">Name</FormLabel>
        <Input {...register("name")} />
        {errors.name && (
          <FormErrorMessage fontSize="xs">
            {errors.name.message}
          </FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={!!errors.email}>
        <FormLabel fontSize="sm">Email</FormLabel>
        <Input inputMode="email" autoCapitalize="none" {...register("email")} />
        {errors.email && (
          <FormErrorMessage fontSize="xs">
            {errors.email.message}
          </FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={!!errors.phone}>
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
      <FormControl isInvalid={!!errors.message}>
        <FormLabel fontSize="sm">Message</FormLabel>
        <Textarea {...register("message")} />
        {errors.message && (
          <FormErrorMessage fontSize="xs">
            {errors.message.message}
          </FormErrorMessage>
        )}
      </FormControl>
      <Button type="submit" colorScheme="blue">
        Send message
      </Button>
    </Stack>
  );
}
