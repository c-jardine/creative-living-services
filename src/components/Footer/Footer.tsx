import {
  Box,
  Container,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
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
import { Heading } from "../Heading";
import { Logo } from "../Logo";

const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <Box as="footer" className={montserrat.className}>
      <Box bg="white" borderTopWidth={1}>
        <Container maxW="container.2xl" p={8}>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 6 }} spacing={8}>
            <Logo
              containerProps={{
                gridColumn: { sm: "1 / span 2" },
              }}
            />

            <Stack
              spacing={4}
              fontSize="sm"
              gridColumn={{ sm: "1 / span 2", md: "1", lg: "3" }}
            >
              <Heading as="h2" fontSize="lg" fontWeight="bold">
                Links
              </Heading>
              <Stack>
                <HStack as={NextLink} href="/" spacing={1}>
                  <Icon as={FaChevronRight} />
                  <Text>Home</Text>
                </HStack>
                <HStack as={NextLink} href="/services" spacing={1}>
                  <Icon as={FaChevronRight} />
                  <Text>Services</Text>
                </HStack>
                <HStack as={NextLink} href="/ads-vh" spacing={1}>
                  <Icon as={FaChevronRight} />
                  <Text>ADS/VH</Text>
                </HStack>
                <HStack as={NextLink} href="/about" spacing={1}>
                  <Icon as={FaChevronRight} />
                  <Text>About</Text>
                </HStack>
                <HStack as={NextLink} href="/contact" spacing={1}>
                  <Icon as={FaChevronRight} />
                  <Text>Contact</Text>
                </HStack>
                <HStack as={NextLink} href="/careers" spacing={1}>
                  <Icon as={FaChevronRight} />
                  <Text>Careers</Text>
                </HStack>
              </Stack>
            </Stack>

            <Stack
              spacing={4}
              fontSize="sm"
              gridColumn={{ sm: "1 / span 2", md: "2", lg: "4" }}
            >
              <Heading as="h2" fontSize="lg" fontWeight="bold">
                Resources
              </Heading>
              <Stack>
                <HStack
                  as={Link}
                  href="https://lucasdd.org"
                  target="_blank"
                  alignItems="flex-start"
                  spacing={1}
                >
                  <Icon as={FaExternalLinkAlt} mt={1} />
                  <Text>Lucas County Board of Developmental Disabilities</Text>
                </HStack>
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
              <Stack>
                <HStack alignItems="flex-start">
                  <Icon as={FaMapPin} mt={1} />
                  <Stack spacing={0}>
                    <Text>4757 N. Summit St.</Text>
                    <Text>Toledo, OH 43611</Text>
                  </Stack>
                </HStack>
              </Stack>

              <HStack alignItems="center">
                <Icon as={FaPhone} />
                <Text>(419) 724-4690</Text>
              </HStack>

              <HStack alignItems="center">
                <Icon as={FaEnvelope} />
                <Text>creativelivingservice@gmail.com</Text>
              </HStack>

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
