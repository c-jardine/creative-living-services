import { Image, Stack, StackProps, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Logo({
  containerProps,
}: {
  containerProps?: StackProps;
}) {
  return (
    <Stack
      as={NextLink}
      aria-label="Creative Living Services logo that navigates to the home page."
      href="/"
      spacing={0}
      alignItems="center"
      role="group"
      {...containerProps}
    >
      <Image
        src="/images/creative-living-services-logo.jpg"
        alt="Creative Living Services logo of people holding hands, including a person in a wheelchair."
        h="auto"
        w={32}
      />
      <Text
        fontSize="sm"
        fontWeight="bold"
        _groupHover={{
          color: "blue.700",
        }}
      >
        Creative Living Services
      </Text>
    </Stack>
  );
}
