import { Box, Container, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Logo } from "../Logo";

export default function DesktopNavbar() {
  const router = useRouter();

  function getLinkColor(url: string) {
    return router.asPath === url ? "blue.600" : "gray.600";
  }

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
            <Link
              as={NextLink}
              href="/"
              aria-label="Navigate to the home page."
              variant="navLink"
              color={getLinkColor("/")}
            >
              Home
            </Link>
            <Link
              as={NextLink}
              href="/services"
              aria-label="Navigate to the services page."
              variant="navLink"
              color={getLinkColor("/services")}
            >
              Services
            </Link>
            <Link
              as={NextLink}
              href="/ads-vh"
              variant="navLink"
              aria-label="Navigate to the adult day services and vocational habilitation page."
              color={getLinkColor("/ads-vh")}
            >
              ADS/VH
            </Link>
            <Link
              as={NextLink}
              href="/about"
              aria-label="Navigate to the about us page"
              variant="navLink"
              color={getLinkColor("/about")}
            >
              About
            </Link>
            <Link
              as={NextLink}
              href="/contact"
              aria-label="Navigate to the contact us page"
              variant="navLink"
              color={getLinkColor("/contact")}
            >
              Contact
            </Link>
            <Link
              as={NextLink}
              href="/careers"
              aria-label="Navigate to the careers page"
              variant="navLinkOutline"
              bg={router.asPath === "/careers" ? "blue.600" : "white"}
              color={router.asPath === "/careers" ? "white" : "blue.600"}
              ml={4}
            >
              Careers
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
