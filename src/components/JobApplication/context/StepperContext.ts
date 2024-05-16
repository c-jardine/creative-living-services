import { UseStepsReturn } from "@chakra-ui/react";
import React from "react";

export const StepperContext = React.createContext<{
  stepper: UseStepsReturn | null;
  size: number;
}>({ stepper: null, size: 0 });

export function useStepperContext() {
  const { stepper, size } = React.useContext(StepperContext);

  if (!stepper)
    throw new Error(
      "useStepperContext must be used within StepperContext.Provider"
    );

  return { stepper, size };
}
