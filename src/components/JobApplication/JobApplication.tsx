import {
  Container,
  Icon,
  Stack,
  Step,
  StepIndicator,
  Stepper,
  StepSeparator,
  StepStatus,
  useSteps,
} from "@chakra-ui/react";
import React from "react";
import {
  FaAddressBook,
  FaBriefcase,
  FaCertificate,
  FaGraduationCap,
  FaPlus,
  FaSignature,
  FaUser,
} from "react-icons/fa";
import AdditionalInfoForm from "./AdditionalInfoForm";
import AuthorizationForm from "./AuthorizationForm";
import CertificationsForm from "./CertificationsForm";
import ContactInfoForm from "./ContactInfoForm";
import { StepperContext } from "./context";
import EducationHistoryForm from "./EducationHistoryForm";
import EmploymentHistoryForm from "./EmploymentHistoryForm";
import PersonalDetailsForm from "./PersonalDetailsForm";

const steps = [
  { title: "Personal details", icon: FaUser },
  { title: "Contact info", icon: FaAddressBook },
  { title: "Additional info", icon: FaPlus },
  { title: "Employment history", icon: FaBriefcase },
  { title: "Education history", icon: FaGraduationCap },
  { title: "Certifications", icon: FaCertificate },
  { title: "Authorization/Signature", icon: FaSignature },
];

const formSections = [
  PersonalDetailsForm,
  ContactInfoForm,
  AdditionalInfoForm,
  EmploymentHistoryForm,
  EducationHistoryForm,
  CertificationsForm,
  AuthorizationForm,
];

export default function JobApplication() {
  // Set up stepper
  const stepper = useSteps({
    index: 0,
    count: steps.length,
  });

  // Render the stepper
  function _renderStepper() {
    return (
      <Stepper index={stepper.activeStep} size="lg" overflowX="scroll">
        {steps.map((step, index) => (
          <Step
            key={index}
            // Allow steps to be links
            // onClick={() => stepper.setActiveStep(index)}
          >
            <StepIndicator>
              <StepStatus
                incomplete={<Icon as={step.icon} color="gray.400" />}
                active={<Icon as={step.icon} color="blue.600" />}
                complete={<Icon as={step.icon} color="white" />}
              />
            </StepIndicator>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    );
  }

  // Render the current form based on the active step
  function _renderCurrentForm() {
    return React.createElement(formSections[stepper.activeStep]);
  }

  return (
    <StepperContext.Provider value={{ stepper, size: steps.length }}>
      {_renderStepper()}
      <Container as={Stack} p={0} spacing={8} maxW="lg">
        {_renderCurrentForm()}
      </Container>
    </StepperContext.Provider>
  );
}
