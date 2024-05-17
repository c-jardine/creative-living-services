import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";

export default function ContactForm() {
  return (
    <Stack as='form' spacing={4}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input />
      </FormControl>
      <FormControl>
        <FormLabel>Phone number</FormLabel>
        <Input />
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
