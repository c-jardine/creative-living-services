import { getNavLinkColor } from "@/utils";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaBars, FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";
import { Logo } from "../Logo";

export default function MobileNavbar() {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toggleRef = React.useRef(null);

  return (
    <Box
      display={{ base: "block", lg: "none" }}
      bg="white"
      borderBottomWidth={1}
    >
      <Container maxW="1920px" px={8} py={4}>
        <HStack justifyContent="space-between">
          <Logo />
          <IconButton
            icon={<Icon as={FaBars} strokeWidth={3} />}
            aria-label="Toggle navigation"
            onClick={onOpen}
            variant="outline"
            colorScheme="blue"
          />
          <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={toggleRef}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader></DrawerHeader>
              <DrawerBody>
                <Stack as="nav">
                  <Link
                    as={NextLink}
                    href="/"
                    variant="navLink"
                    color={getNavLinkColor(router, "/")}
                    onClick={onClose}
                  >
                    Home
                  </Link>
                  <Link
                    as={NextLink}
                    href="/services"
                    variant="navLink"
                    color={getNavLinkColor(router, "/services")}
                    onClick={onClose}
                  >
                    Services
                  </Link>
                  <Link
                    as={NextLink}
                    href="/ads-vh"
                    variant="navLink"
                    color={getNavLinkColor(router, "/ads-vh")}
                    onClick={onClose}
                  >
                    ADS/VH
                  </Link>
                  <Link
                    as={NextLink}
                    href="/about"
                    variant="navLink"
                    color={getNavLinkColor(router, "/about")}
                    onClick={onClose}
                  >
                    About
                  </Link>
                  <Link
                    as={NextLink}
                    href="/contact"
                    variant="navLink"
                    color={getNavLinkColor(router, "/contact")}
                    onClick={onClose}
                  >
                    Contact
                  </Link>
                  <Link
                    as={NextLink}
                    href="/careers"
                    variant="navLink"
                    color={getNavLinkColor(router, "/careers")}
                    onClick={onClose}
                  >
                    Careers
                  </Link>
                </Stack>
              </DrawerBody>
              <DrawerFooter
                display="block"
                bg="hsl(209, 62%, 98%)"
                borderTopWidth={1}
              >
                <Stack>
                  <Stack spacing={4}>
                    <HStack>
                      <Icon as={FaPhone} stroke="gray.500" />
                      <Link href="tel:+14197244690" fontSize="sm">
                        (419) 724-4690
                      </Link>
                    </HStack>

                    <HStack>
                      <Icon as={FaEnvelope} stroke="gray.500" />
                      <Link
                        href="mailto:creativelivingservice@gmail.com"
                        fontSize="sm"
                      >
                        creativelivingservice@gmail.com
                      </Link>
                    </HStack>

                    <HStack alignItems="center">
                      <Icon
                        as={FaFacebook}
                        fill="#1877F2"
                        stroke="transparent"
                      />
                      <Link
                        href="https://www.facebook.com/creativelivingservice"
                        target="_blank"
                        fontSize="sm"
                      >
                        Find us on Facebook
                      </Link>
                    </HStack>
                  </Stack>
                </Stack>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </HStack>
      </Container>
    </Box>
  );
}
