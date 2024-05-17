import { Heading } from "@/components/Heading";
import {
  Box,
  Container,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";
import {
  FaAmbulance,
  FaBriefcase,
  FaChevronRight,
  FaHome,
} from "react-icons/fa";
import { FaHandsAslInterpreting } from "react-icons/fa6";

export default function HomePage() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setIsOpen(true), 1000);
  }, []);

  return (
    <>
      <Head>
        <title>
          Personalized Care for Individuals with Developmental Disabilities
        </title>
        <meta
          name="description"
          content="Providing homemaker care, transportation, vocational habilitation, and adult day services for individuals with cognitive or developmental disabilities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box position="relative" mt={-16} overflow="hidden">
        <Image
          src="/images/home-hero.jpg"
          alt=""
          h={{ base: "35vh", sm: "45vh", md: "55vh", lg: "75vh" }}
          w="full"
          objectFit="cover"
        />
        <Stack
          position={{ lg: "absolute" }}
          top={{ lg: "75%" }}
          left={{ lg: 16 }}
          transform={{ lg: "translateY(-50%)" }}
          rounded={{ lg: "xl" }}
          px={{ base: 4, sm: 8, md: 16 }}
          py={8}
          bg="blue.100"
          maxW={{ lg: "container.sm" }}
          shadow={{ lg: "dark-lg" }}
        >
          <Text color="blue.950" fontWeight="bold" fontSize="2xl">
            Celebrating our differences
          </Text>
          <Text color="blackAlpha.800">
            We give back to our community rather than take from it. Creative
            Living Services is a place everyone can call home!
          </Text>
          <Link
            as={NextLink}
            href="#main-content"
            variant="navLinkOutline"
            display="flex"
            mt={4}
            alignSelf="center"
            alignItems="center"
            gap={2}
          >
            Learn more
            <Icon as={FaChevronRight} />
          </Link>
        </Stack>
      </Box>
      <Stack spacing={16}>
        <Container as={Stack} spacing={8} maxW="container.xl">
          <Heading id="main-content" as="h1">
            Services for individuals with developmental or cognitive
            disabilities
          </Heading>
          <Text color="gray.600">
            Creative Living Services is a dedicated provider of support for
            individuals with developmental or cognitive disabilities. Our
            services include homemaker personal care, medical and non-medical
            transportation, vocational habilitation, and adult day services.
          </Text>
          <Text color="gray.600">
            Our team of highly trained professionals works diligently to execute
            individualized plans, helping our consumers lead fulfilling lives.
            Committed to excellence, we invite you to learn more about our
            company, staff, and the individuals we support.
          </Text>
          <Text color="gray.600">
            Contact us today to discover how Creative Living Services can make a
            difference in your life.
          </Text>

          {/* <Text>
            Creative Living Services is a small, but active, company that
            provides services for individuals with developmental or cognitive
            disabilities. Our highly trained staff delivers homemaker personal
            care services, medical and non-medical transportation, vocational
            habilitation, and adult day services. We work diligently in the
            execution of individualized plans to help our consumers lead full,
            rewarding lives. Creative Living Services is committed to
            excellence, and we invite you to learn more about our company,
            staff, and the individuals we support!
          </Text> */}
        </Container>
        <Box bg="blue.100">
          <Container as={Stack} py={16} spacing={12} maxW="container.xl">
            <Heading as="h2" textAlign="center">
              Services we provide
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={12}>
              <Stack alignItems="center">
                <Icon as={FaHome} boxSize={12} color="green.500" />
                <Text textAlign="center">Homemaker personal care services</Text>
              </Stack>
              <Stack alignItems="center">
                <Icon as={FaAmbulance} boxSize={12} color="red.500" />
                <Text textAlign="center">
                  Medical and non-medical transportation
                </Text>
              </Stack>
              <Stack alignItems="center">
                <Icon as={FaBriefcase} boxSize={12} color="orange.500" />
                <Text textAlign="center">Vocational habilitation</Text>
              </Stack>
              <Stack alignItems="center">
                <Icon
                  as={FaHandsAslInterpreting}
                  boxSize={12}
                  color="purple.500"
                />
                <Text textAlign="center">Adult day services</Text>
              </Stack>
            </SimpleGrid>
            <Link
              as={NextLink}
              href="/services"
              variant="navLinkOutline"
              w="fit-content"
              alignSelf="center"
            >
              Learn more
            </Link>
          </Container>
        </Box>
        <Container as={Stack} spacing={8} maxW="container.xl">
          <Heading as="h2">Our Person-Centered Philosophy</Heading>
          <Text>
            Creative Living Services prioritizes people, adhering to a
            person-centered philosophy. We value individual choices,
            perspectives, and dreams, offering tailored assistance for
            purposeful outcomes. Embracing diversity, we celebrate uniqueness
            while meeting community needs. Join us, where everyone can feel at
            home!
          </Text>
          {/* <Text>
            Creative Living Services Operates under a Peopled Centered
            Philosophy, and as an organization, our first commitment is to the
            people we serve. We respect and value their choices, perspectives,
            opinions, and dreams. Within our company, we recognize our
            similarities while celebrating our differences. We understand the
            needs of those we serve, and we provide necessary assistance toward
            purposeful outcomes. We give back to our community rather than take
            from it. Most importantly, Creative Living Services is a places
            everyone can feel at home!
          </Text> */}
        </Container>
      </Stack>
    </>
  );
}
