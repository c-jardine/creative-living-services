import { Heading } from "@/components/Heading";
import { HeadMetadata } from "@/components/HeadMetadata";
import {
  Box,
  Container,
  HStack,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaAmbulance, FaChevronRight, FaHome } from "react-icons/fa";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { PiBroomFill } from "react-icons/pi";

export default function HomePage() {
  function Card({
    color,
    icon,
    title,
    description,
    href,
  }: {
    color: string;
    icon: IconType;
    title: string;
    description: string;
    href: string;
  }) {
    return (
      <Stack
        as={NextLink}
        href={href}
        p={{ base: 4, sm: 8 }}
        rounded="2xl"
        bg="blue.50"
        role="group"
      >
        <Icon as={icon} color={`${color}.600`} boxSize={8} />
        <Text
          flexGrow={1}
          fontWeight="bold"
          color="blue.900"
          transition="250ms cubic-bezier(0.25, 1, 0.5, 1)"
          _groupHover={{
            color: "blue.600",
          }}
        >
          {title}
        </Text>
        <Text mt={2} fontSize="sm" color="blue.800">
          {description}
        </Text>
        <HStack mt={2} alignItems="center">
          <Text
            fontSize="sm"
            fontWeight="bold"
            color="blue.900"
            transition="250ms cubic-bezier(0.25, 1, 0.5, 1)"
            _groupHover={{
              color: "blue.600",
            }}
          >
            Read more
          </Text>
          <Icon
            as={FaChevronRight}
            opacity={0}
            transition="250ms cubic-bezier(0.25, 1, 0.5, 1)"
            _groupHover={{
              color: "blue.600",
              transform: "translateX(1rem)",
              opacity: 1,
            }}
          />
        </HStack>
      </Stack>
    );
  }
  return (
    <>
      <HeadMetadata
        title="Personalized Care for Individuals with Developmental Disabilities"
        description="Providing homemaker care, transportation, vocational habilitation, and adult day services for individuals with cognitive or developmental disabilities."
        canonical="/"
      />

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
            aria-label="Learn more about what Creative Living Services does"
            variant="primary"
            display="flex"
            alignItems="center"
            gap={2}
            mt={4}
            w="fit-content"
          >
            Learn more
            <Icon as={FaChevronRight} />
          </Link>
        </Stack>
      </Box>

      <Stack spacing={16}>
        <Container as={Stack} maxW="container.md">
          <Heading as="h1" id="main-content" scrollMarginTop={4}>
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
        </Container>

        <Box bg="white">
          <Container position="relative" maxW="1920px">
            <Image
              display={{ base: "none", md: "block" }}
              src="/graphics/squares.png"
              alt="Squares graphic"
              position="absolute"
              top={-8}
              left={0}
              w={{ sm: "22rem", lg: "26rem" }}
              transform="rotate(-180deg)"
            />
            <Image
              display={{ base: "none", md: "block" }}
              src="/graphics/squares.png"
              alt="Squares graphic"
              position="absolute"
              bottom={-8}
              right={0}
              w={{ sm: "22rem", lg: "26rem" }}
            />
            <Stack position="relative" py={16} spacing={12} maxW="container.xl">
              <Heading as="h2" textAlign="center">
                Services we provide
              </Heading>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={4}>
                <Card
                  color="green"
                  icon={FaHome}
                  title="Personal care services"
                  description="Hygiene, dressing, feeding, and mobility."
                  href="/services#personal-care-services"
                />
                <Card
                  color="red"
                  icon={FaAmbulance}
                  title="Transportation"
                  description="Medical and non-medical transportation services."
                  href="/services#transportation"
                />
                <Card
                  color="purple"
                  icon={FaHandsAslInterpreting}
                  title="Adult day services"
                  description="Personal development and social interaction."
                  href="/services#adult-day-services"
                />
                <Card
                  color="orange"
                  icon={PiBroomFill}
                  title="Vocational habilitation"
                  description="Ongoing support in regular employment settings."
                  href="/services#vocational-habilitation"
                />
              </SimpleGrid>
              <Link
                as={NextLink}
                href="/services"
                aria-label="Learn more about the services we provide."
                variant="primary"
                w="fit-content"
                alignSelf="center"
              >
                About our services
              </Link>
            </Stack>
          </Container>
        </Box>

        <Container as={Stack} maxW="container.md">
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
