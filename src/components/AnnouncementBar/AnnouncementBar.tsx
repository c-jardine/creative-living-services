import { Box, Container, Icon, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function AnnouncementBar() {
  return (
    <Box bg="blue.600">
      <Container maxW="1920px" px={8}>
        <Link
          as={NextLink}
          href="/careers"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          py={2}
          color="blue.50"
          fontSize="sm"
        >
          We&apos;re always accepting applications. Fill yours out now!
          <Icon as={FaArrowRight} color="blue.50" />
        </Link>
      </Container>
    </Box>
  );
}
