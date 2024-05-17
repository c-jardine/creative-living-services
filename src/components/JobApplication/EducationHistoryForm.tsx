import { institutionTypes, statesList } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { saveEducationHistory } from "@/store/reducers";
import {
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Heading } from "../Heading";
import { useStepperContext } from "./context";
import FormNavButtons from "./FormNavButtons";
import { educationHistorySchema } from "./schemas";
import { EducationHistoryType } from "./types";

const defaultValues: EducationHistoryType["educationHistory"][0] = {
  institution: "",
  name: "",
  degree: "",
  city: "",
  state: "",
  isComplete: "Yes",
};

export default function EducationHistoryForm() {
  const {
    stepper: { goToNext },
  } = useStepperContext();

  const educationHistoryState = useAppSelector(
    (state) => state.persistedReducer.educationHistory
  );
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EducationHistoryType>({
    defaultValues: {
      educationHistory: educationHistoryState.educationHistory,
    },
    resolver: zodResolver(educationHistorySchema),
  });

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "educationHistory",
  });

  function onSubmit(data: EducationHistoryType) {
    dispatch(saveEducationHistory(data));
    goToNext();
  }

  return (
    <Stack as="form" spacing={8} onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h2" fontSize="2xl">
        Education History
      </Heading>
      <Stack gap={4}>
        {fields.length === 0 && (
          <Text fontStyle="italic">Add your education history</Text>
        )}
        {fields?.map((field, index) => (
          <SimpleGrid columns={6} gap={4} key={field.id}>
            <FormControl
              gridColumn="1 / span 6"
              isInvalid={!!errors.educationHistory?.[index]?.institution}
            >
              <FormLabel fontSize="sm">Institution</FormLabel>
              <Controller
                control={control}
                name={`educationHistory.${index}.institution`}
                render={({ field }) => (
                  <Select {...field} placeholder="Choose institution...">
                    {institutionTypes.map((institution, index) => (
                      <option key={index} value={institution.value}>
                        {institution.label}
                      </option>
                    ))}
                  </Select>
                )}
              />
              {errors.educationHistory?.[index]?.institution && (
                <FormErrorMessage fontSize="xs">
                  {errors.educationHistory?.[index]?.institution?.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              key={field.id}
              gridColumn="1 / span 6"
              isInvalid={!!errors.educationHistory?.[index]?.name}
            >
              <FormLabel fontSize="sm">Name</FormLabel>
              <Input {...register(`educationHistory.${index}.name`)} />
              {errors.educationHistory?.[index]?.name && (
                <FormErrorMessage fontSize="xs">
                  {errors.educationHistory?.[index]?.name?.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              key={field.id}
              gridColumn="1 / span 4"
              isInvalid={!!errors.educationHistory?.[index]?.degree}
            >
              <FormLabel fontSize="sm">Degree</FormLabel>
              <Input {...register(`educationHistory.${index}.degree`)} />
              {errors.educationHistory?.[index]?.degree && (
                <FormErrorMessage fontSize="xs">
                  {errors.educationHistory?.[index]?.degree?.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              key={field.id}
              gridColumn="5 / span 2"
              isInvalid={!!errors.educationHistory?.[index]?.isComplete}
            >
              <FormLabel fontSize="sm">Is complete</FormLabel>
              <HStack
                spacing={4}
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Controller
                  control={control}
                  name={`educationHistory.${index}.isComplete`}
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
              {errors.educationHistory?.[index]?.isComplete && (
                <FormErrorMessage fontSize="xs">
                  {errors.educationHistory?.[index]?.isComplete?.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              key={field.id}
              gridColumn="1 / span 4"
              isInvalid={!!errors.educationHistory?.[index]?.city}
            >
              <FormLabel fontSize="sm">City</FormLabel>
              <Input {...register(`educationHistory.${index}.city`)} />
              {errors.educationHistory?.[index]?.city && (
                <FormErrorMessage fontSize="xs">
                  {errors.educationHistory?.[index]?.city?.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              key={field.id}
              gridColumn="5 / span 2"
              isInvalid={!!errors.educationHistory?.[index]?.state}
            >
              <FormLabel fontSize="sm">State</FormLabel>
              <Controller
                control={control}
                name={`educationHistory.${index}.state`}
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
              {errors.educationHistory?.[index]?.state && (
                <FormErrorMessage fontSize="xs">
                  {errors.educationHistory?.[index]?.state?.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <Button
              colorScheme="red"
              gridColumn={{ md: "1 / span 6" }}
              onClick={() => remove()}
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

      <FormNavButtons />
    </Stack>
  );
}
