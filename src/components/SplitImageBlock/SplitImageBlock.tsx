import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";

export default function SplitImageBlock({
  children,
  imgSrc,
  flip = false,
}: {
  children: React.ReactNode;
  imgSrc: string;
  flip?: boolean;
}) {
  return (
    <SimpleGrid columns={{ base: 1, md: 5 }} gap={8}>
      <Stack
        gridColumn={{ base: "1", md: flip ? "4 / span 2" : "1 / span 2" }}
        spacing={{ base: 4, md: 16 }}
        rounded="2xl"
        bg="blue.200"
        p={{ base: 4, sm: 8 }}
        justifyContent="space-between"
      >
        {children}
      </Stack>
      <Box
        gridColumn={{ base: "1", md: flip ? "1 / span 3" : "3 / span 3" }}
        gridRow={1}
        rounded="2xl"
        minH={{ base: 72, md: "24rem" }}
        bgImage={`url("${imgSrc}")`}
        bgSize="cover"
      />
    </SimpleGrid>
  );
}
