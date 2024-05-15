import { Box, Container, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { Logo } from "../Logo";

export default function DesktopNavbar() {
  return (
    <Box
      display={{ base: "none", lg: "block" }}
      bg="white"
      borderBottomWidth={1}
    >
      <Container maxW="container.2xl" px={8} py={4}>
        <HStack justifyContent="space-between">
          <Logo />
          <HStack as="nav">
            <Link as={NextLink} href="/" variant="navLink">
              Home
            </Link>
            <Link as={NextLink} href="/services" variant="navLink">
              Services
            </Link>
            <Link as={NextLink} href="/ads-vh" variant="navLink">
              ADS/VH
            </Link>
            <Link as={NextLink} href="/about" variant="navLink">
              About
            </Link>
            <Link as={NextLink} href="/contact" variant="navLink">
              Contact
            </Link>
            <Link as={NextLink} href="/careers" variant="navLinkOutline" ml={4}>
              Careers
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
