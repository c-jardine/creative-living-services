import { Image, Stack, StackProps, Text } from "@chakra-ui/react";

export default function Logo({
  containerProps,
}: {
  containerProps?: StackProps;
}) {
  return (
    <Stack spacing={0} alignItems="center" {...containerProps}>
      <Image
        src="/images/creative-living-services-logo.jpg"
        alt="Creative Living Services logo of people holding hands, including a person in a wheelchair."
        h="auto"
        w={32}
      />
      <Text fontSize="sm">Creative Living Services</Text>
    </Stack>
  );
}
