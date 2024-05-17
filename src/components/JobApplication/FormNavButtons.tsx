import { Button, HStack, StackProps } from "@chakra-ui/react";
import { useStepperContext } from "./context";

export default function FormNavButtons({
  nextDisabled = false,
  isLoading = false,
  containerProps,
}: {
  nextDisabled?: boolean;
  isLoading?: boolean;
  containerProps?: StackProps;
}) {
  const {
    stepper: { activeStep, goToPrevious },
    size,
  } = useStepperContext();

  return (
    <HStack
      justifyContent={activeStep === 0 ? "flex-end" : "space-between"}
      {...containerProps}
    >
      {/* Show previous on all but the first step */}
      {activeStep !== 0 && (
        <Button variant="outline" colorScheme="blue" onClick={goToPrevious}>
          Previous
        </Button>
      )}

      {/* Show next on all but the last step */}
      <Button
        type="submit"
        colorScheme="blue"
        isDisabled={nextDisabled}
        isLoading={isLoading}
      >
        {activeStep === size - 1 ? "Submit" : "Next"}
      </Button>
    </HStack>
  );
}
