import {
  Box,
  Container,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
import NextLink from "next/link";
import {
  FaChevronRight,
  FaClock,
  FaEnvelope,
  FaExternalLinkAlt,
  FaMapPin,
  FaPhone,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { Heading } from "../Heading";
import { Logo } from "../Logo";

const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

function CustomLink({
  href,
  icon,
  isExternal = false,
  children,
  ...rest
}: {
  href: string;
  icon?: IconType;
  isExternal?: boolean;
  children: string;
} & StackProps) {
  return (
    <HStack
      as={isExternal ? Link : NextLink}
      href={href}
      alignItems="flex-start"
      role="group"
      {...rest}
    >
      <Icon
        as={icon ? icon : FaChevronRight}
        mt={1}
        transition="250ms ease-in-out"
        _groupHover={{
          color: "blue.400",
        }}
      />
      <Text
        transition="250ms ease-in-out"
        _groupHover={{
          color: "blue.500",
        }}
      >
        {children}
      </Text>
    </HStack>
  );
}

export default function Footer() {
  return (
    <Box as="footer" className={montserrat.className} position="relative">
      <Box bg="white" borderTopWidth={1}>
        <Container maxW="1920px" p={8}>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 6 }} spacing={8}>
            <Logo
              containerProps={{
                gridColumn: { sm: "1 / span 2" },
              }}
            />

            <Stack
              as="nav"
              spacing={4}
              fontSize="sm"
              gridColumn={{ sm: "1 / span 2", md: "1", lg: "3" }}
            >
              <Heading as="h2" fontSize="lg" fontWeight="bold">
                Links
              </Heading>
              <Stack>
                <CustomLink href="/" aria-label="Navigate to the home page">
                  Home
                </CustomLink>
                <CustomLink
                  href="/services"
                  aria-label="Navigate to the services page"
                >
                  Services
                </CustomLink>
                <CustomLink
                  href="/ads-vh"
                  aria-label="Navigate to the adult day services and vocational habilitation page"
                >
                  ADS/VH
                </CustomLink>
                <CustomLink
                  href="/about"
                  aria-label="Navigate to the about us page"
                >
                  About
                </CustomLink>
                <CustomLink
                  href="/contact"
                  aria-label="Navigate to the contact us page"
                >
                  Contact
                </CustomLink>
                <CustomLink
                  href="/careers"
                  aria-label="Navigate to the careers page"
                >
                  Careers
                </CustomLink>
              </Stack>
            </Stack>

            <Stack
              as="nav"
              spacing={4}
              fontSize="sm"
              gridColumn={{ sm: "1 / span 2", md: "2", lg: "4" }}
            >
              <Heading as="h2" fontSize="lg" fontWeight="bold">
                Resources
              </Heading>
              <Stack>
                <CustomLink
                  href="https://lucasdd.org"
                  aria-label="Go to the Lucas County Board of Developmental Disabilities website."
                  icon={FaExternalLinkAlt}
                  isExternal
                >
                  Lucas County Board of Developmental Disabilities
                </CustomLink>
              </Stack>
            </Stack>

            <Stack
              spacing={4}
              fontSize="sm"
              gridColumn={{ sm: "1 / span 2", lg: "5 / span 2" }}
            >
              <Heading as="h2" fontSize="lg" fontWeight="bold">
                Contact
              </Heading>
              <HStack alignItems="flex-start">
                <Icon as={FaMapPin} mt={1} />
                <Stack spacing={0}>
                  <Text>4757 N. Summit St.</Text>
                  <Text>Toledo, OH 43611</Text>
                </Stack>
              </HStack>

              <CustomLink
                href="tel:+1419724-4690"
                aria-label="Call Creative Living Services at +1 (419) 724-4690"
                icon={FaPhone}
                isExternal
              >
                (419) 724-4690
              </CustomLink>

              <CustomLink
                href="mailto:creativelivingservice@gmail.com"
                aria-label="Email Creative Living Services at creativelivingservice@gmail.com"
                icon={FaEnvelope}
                isExternal
              >
                creativelivingservice@gmail.com
              </CustomLink>

              <Heading as="h2" fontSize="md" fontWeight="bold">
                Hours
              </Heading>
              <HStack mt={-2} alignItems="flex-start">
                <Icon as={FaClock} mt={1} />
                <Stack spacing={0}>
                  <Text>Mon - Fri: 9 am - 4 pm</Text>
                  <Text>Sat - Sun: CLOSED</Text>
                </Stack>
              </HStack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
