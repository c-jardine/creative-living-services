import { phoneMaskOptions } from "@/constants";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useMaskito } from "@maskito/react";
import { US } from "country-flag-icons/react/3x2";

export default function ContactForm() {
  const phoneMaskRef = useMaskito({ options: phoneMaskOptions });

  function Flag() {
    return (
      <Flex w={6} h={6} rounded="full" overflow="hidden" shadow="md">
        <US
          title="United States"
          style={{
            transform: "scale(1.75)",
          }}
        />
      </Flex>
    );
  }

  return (
    <Stack as="form" spacing={4}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input inputMode="email" autoCapitalize="none" />
      </FormControl>
      <FormControl>
        <FormLabel>Phone number</FormLabel>
        <InputGroup>
          <Input
            ref={phoneMaskRef}
            type="tel"
            inputMode="tel"
            // onInput={(e) => setValue("phone", e.currentTarget.value)}
            // onBlur={onBlur}
            // value={value}
          />
          <InputRightElement pointerEvents="none">
            <Flag />
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Message</FormLabel>
        <Textarea />
      </FormControl>
      <Button type="submit" colorScheme="blue">
        Send message
      </Button>
    </Stack>
  );
}
