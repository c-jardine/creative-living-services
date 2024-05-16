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
import React from "react";
import { FaEnvelope, FaFacebook, FaHamburger, FaPhone } from "react-icons/fa";
import { Logo } from "../Logo";

export default function MobileNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toggleRef = React.useRef(null);

  return (
    <Box
      display={{ base: "block", lg: "none" }}
      bg="white"
      borderBottomWidth={1}
    >
      <Container maxW="container.2xl" px={8} py={4}>
        <HStack justifyContent="space-between">
          <Logo />
          <IconButton
            icon={<Icon as={FaHamburger} strokeWidth={3} />}
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
                  <Link as={NextLink} href="/careers" variant="navLink">
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
