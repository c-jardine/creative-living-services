import { phoneMaskOptions, statesList } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { saveEmploymentHistory } from "@/store/reducers";
import {
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMaskito } from "@maskito/react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Heading } from "../Heading";
import { InputFlag } from "../InputFlag";
import { useStepperContext } from "./context";
import FormNavButtons from "./FormNavButtons";
import { employmentHistorySchema } from "./schemas";
import { EmploymentHistoryType } from "./types";

const defaultValues: EmploymentHistoryType["employmentHistory"][0] = {
  position: "",
  startDate: "",
  endDate: "",
  company: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  supervisorName: "",
  supervisorNumber: "",
  salary: "",
  weeklyHours: "",
  duties: "",
  reasonForLeaving: "",
};

export default function EmploymentHistoryForm() {
  const phoneMaskRef = useMaskito({ options: phoneMaskOptions });
  const supervisorPhoneMaskRef = useMaskito({ options: phoneMaskOptions });

  const {
    stepper: { goToNext },
  } = useStepperContext();

  const employmentHistoryState = useAppSelector(
    (state) => state.persistedReducer.employmentHistory
  );
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid },
  } = useForm<EmploymentHistoryType>({
    defaultValues: {
      employmentHistory: employmentHistoryState.employmentHistory,
    },
    resolver: zodResolver(employmentHistorySchema),
  });

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "employmentHistory",
  });

  function onSubmit(data: EmploymentHistoryType) {
    dispatch(saveEmploymentHistory(data));
    goToNext();
  }

  return (
    <Stack as="form" spacing={8} onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h2" fontSize="2xl">
        Employment History
      </Heading>
      <Stack gap={4}>
        {fields.length === 0 && (
          <Text fontStyle="italic">Add your employment history</Text>
        )}
        {fields?.map((field, index) => (
          <SimpleGrid columns={6} gap={4} key={field.id}>
            <FormControl
              gridColumn="1 / span 6"
              isInvalid={!!errors.employmentHistory?.[index]?.position}
            >
              <FormLabel fontSize="sm">Position</FormLabel>
              <Input {...register(`employmentHistory.${index}.position`)} />
              {errors.employmentHistory?.[index]?.position && (
                <FormErrorMessage fontSize="xs">
                  {errors.employmentHistory?.[index]?.position?.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              key={field.id}
              gridColumn="1 / span 3"
              isInvalid={!!errors.employmentHistory?.[index]?.startDate}
            >
              <FormLabel fontSize="sm">Start date</FormLabel>
              <Input
                {...register(`employmentHistory.${index}.startDate`)}
                type="date"
              />
              {errors.employmentHistory?.[index]?.startDate && (
                <FormErrorMessage fontSize="xs">
                  {errors.employmentHistory?.[index]?.startDate?.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              key={field.id}
              gridColumn="4 / span 3"
              isInvalid={!!errors.employmentHistory?.[index]?.endDate}
            >
              <FormLabel fontSize="sm">End date</FormLabel>
              <Input
                {...register(`employmentHistory.${index}.endDate`)}
                type="date"
              />
              {errors.employmentHistory?.[index]?.endDate && (
                <FormErrorMessage fontSize="xs">
                  {errors.employmentHistory?.[index]?.endDate?.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              key={field.id}
              gridColumn="1 / span 6"
              isInvalid={!!errors.employmentHistory?.[index]?.company}
            >
              <FormLabel fontSize="sm">Company</FormLabel>
              <Input {...register(`employmentHistory.${index}.company`)} />
              {errors.employmentHistory?.[index]?.company && (
                <FormErrorMessage fontSize="xs">
                  {errors.employmentHistory?.[index]?.company?.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              key={field.id}
              gridColumn="1 / span 6"
              isInvalid={!!errors.employmentHistory?.[index]?.address}
            >
              <FormLabel fontSize="sm">Address</FormLabel>
              <Input {...register(`employmentHistory.${index}.address`)} />
              {errors.employmentHistory?.[index]?.address && (
                <FormErrorMessage fontSize="xs">
                  {errors.employmentHistory?.[index]?.address?.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              key={field.id}
              gridColumn="1 / span 4"
              isInvalid={!!errors.employmentHistory?.[index]?.city}
            >
              <FormLabel fontSize="sm">City</FormLabel>
              <Input {...register(`employmentHistory.${index}.city`)} />
              {errors.employmentHistory?.[index]?.city && (
                <FormErrorMessage fontSize="xs">
                  {errors.employmentHistory?.[index]?.city?.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              key={field.id}
              gridColumn="5 / span 2"
              isInvalid={!!errors.employmentHistory?.[index]?.state}
            >
              <FormLabel fontSize="sm">State</FormLabel>
              <Controller
                control={control}
                name={`employmentHistory.${index}.state`}
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
              {errors.employmentHistory?.[index]?.state && (
                <FormErrorMessage fontSize="xs">
                  {errors.employmentHistory?.[index]?.state?.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              key={field.id}
              gridColumn="1 / span 6"
              isInvalid={!!errors.employmentHistory?.[index]?.zipCode}
            >
              <FormLabel fontSize="sm">Zip code</FormLabel>
              <Input
                {...register(`employmentHistory.${index}.zipCode`)}
                inputMode="numeric"
              />
              {errors.employmentHistory?.[index]?.zipCode && (
                <FormErrorMessage fontSize="xs">
                  {errors.employmentHistory?.[index]?.zipCode?.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              gridColumn="1 / span 6"
              isInvalid={!!errors.employmentHistory?.[index]?.supervisorNumber}
            >
              <FormLabel fontSize="sm">Phone number</FormLabel>
              <Controller
                control={control}
                name={`employmentHistory.${index}.phone`}
                render={({ field: { onBlur, value } }) => (
                  <InputGroup>
                    <Input
                      ref={phoneMaskRef}
                      type="tel"
                      inputMode="tel"
                      onInput={(e) =>
                        setValue(
                          `employmentHistory.${index}.phone`,
                          e.currentTarget.value
                        )
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
              {errors.employmentHistory?.[index]?.phone && (
                <FormErrorMessage fontSize="xs">
                  {errors.employmentHistory?.[index]?.phone?.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              key={field.id}
              gridColumn="1 / span 3"
              isInvalid={!!errors.employmentHistory?.[index]?.supervisorName}
            >
              <FormLabel fontSize="sm">Supervisor name</FormLabel>
              <Input
                {...register(`employmentHistory.${index}.supervisorName`)}
              />
              {errors.employmentHistory?.[index]?.supervisorName && (
                <FormErrorMessage fontSize="xs">
                  {errors.employmentHistory?.[index]?.supervisorName?.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              gridColumn="4 / span 3"
              isInvalid={!!errors.employmentHistory?.[index]?.supervisorNumber}
            >
              <FormLabel fontSize="sm">Supervisor phone</FormLabel>
              <Controller
                control={control}
                name={`employmentHistory.${index}.supervisorNumber`}
                render={({ field: { onBlur, value } }) => (
                  <InputGroup>
                    <Input
                      ref={supervisorPhoneMaskRef}
                      type="tel"
                      inputMode="tel"
                      onInput={(e) =>
                        setValue(
                          `employmentHistory.${index}.supervisorNumber`,
                          e.currentTarget.value
                        )
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
              {errors.employmentHistory?.[index]?.supervisorNumber && (
                <FormErrorMessage fontSize="xs">
                  {errors.employmentHistory?.[index]?.supervisorNumber?.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              gridColumn="1 / span 3"
              isInvalid={!!errors.employmentHistory?.[index]?.salary}
            >
              <FormLabel fontSize="sm">Current/ending salary</FormLabel>
              <Input
                {...register(`employmentHistory.${index}.salary`)}
                inputMode="decimal"
              />
              {errors.employmentHistory?.[index]?.salary && (
                <FormErrorMessage fontSize="xs">
                  {errors.employmentHistory?.[index]?.salary?.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              key={field.id}
              gridColumn="4 / span 3"
              isInvalid={!!errors.employmentHistory?.[index]?.weeklyHours}
            >
              <FormLabel fontSize="sm">Weekly hours</FormLabel>
              <Input
                {...register(`employmentHistory.${index}.weeklyHours`)}
                inputMode="decimal"
              />
              {errors.employmentHistory?.[index]?.weeklyHours && (
                <FormErrorMessage fontSize="xs">
                  {errors.employmentHistory?.[index]?.weeklyHours?.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              key={field.id}
              gridColumn="1 / span 6"
              isInvalid={!!errors.employmentHistory?.[index]?.duties}
            >
              <FormLabel fontSize="sm">Job duties</FormLabel>
              <Textarea {...register(`employmentHistory.${index}.duties`)} />
              {errors.employmentHistory?.[index]?.duties && (
                <FormErrorMessage fontSize="xs">
                  {errors.employmentHistory?.[index]?.duties?.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              key={field.id}
              gridColumn="1 / span 6"
              isInvalid={!!errors.employmentHistory?.[index]?.reasonForLeaving}
            >
              <FormLabel fontSize="sm">Reason for leaving</FormLabel>
              <Textarea
                {...register(`employmentHistory.${index}.reasonForLeaving`)}
              />
              {errors.employmentHistory?.[index]?.reasonForLeaving && (
                <FormErrorMessage fontSize="xs">
                  {errors.employmentHistory?.[index]?.reasonForLeaving?.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <Button
              colorScheme="red"
              gridColumn={{ md: "1 / span 6" }}
              onClick={() => remove(index)}
            >
              Delete
            </Button>
            <Divider gridColumn="1 / span 6" />
          </SimpleGrid>
        ))}
      </Stack>

      <Button
        variant="outline"
        colorScheme="blue"
        gridColumn={{ md: "2 / span 2" }}
        onClick={() => append(defaultValues)}
      >
        Add new
      </Button>

      <FormNavButtons nextDisabled={!isValid} />
    </Stack>
  );
}
