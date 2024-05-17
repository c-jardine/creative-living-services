import { Flex } from "@chakra-ui/react";
import { US } from "country-flag-icons/react/3x2";

export default function Flag() {
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
