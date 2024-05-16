import { Box, Container, Icon, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function AnnouncementBar() {
  return (
    <Box bg="#7792BC">
      <Container maxW="container.2xl" px={8}>
        <Link
          as={NextLink}
          href="/careers"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          py={2}
          color="white"
          fontSize="sm"
        >
          We&apos;re always accepting applications. Fill yours out now!
          <Icon as={FaArrowRight} stroke="white" />
        </Link>
      </Container>
    </Box>
  );
}
