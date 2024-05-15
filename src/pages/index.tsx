import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Creative Living Services</title>
        <meta
          name="description"
          content="Providing homemaker care, transportation, vocational habilitation, and adult day services for individuals with cognitive or developmental disabilities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box position="relative" overflow="hidden">
        <Image
          src="/images/home-hero.jpg"
          alt=""
          h="75vh"
          w="full"
          objectFit="cover"
        />
        <Stack
          position="absolute"
          top="50%"
          left={16}
          rounded="xl"
          transform="translateY(-50%)"
          bg="blue.500"
          px={16}
          py={8}
          maxW="container.sm"
          shadow="dark-lg"
        >
          <Text color="white" fontWeight="bold" fontSize="2xl">
            Celebrating our differences
          </Text>
          <Text color="blue.100">
            We give back to our community rather than take from it. Creative
            Living Services is a place everyone can call home!
          </Text>
          <Link
            as={NextLink}
            href="/about"
            variant="outline"
            mt={4}
            alignSelf="center"
          >
            Learn more
          </Link>
        </Stack>
      </Box>
      <Container as={Stack} spacing={8} maxW="container.xl">
        <Heading as="h1">Creative Living Services</Heading>
        <Text>
          Creative Living Services is a small, but active, company that provides
          services for individuals with developmental or cognitive disabilities.
          Our highly trained staff delivers homemaker personal care services,
          medical and non-medical transportation, vocational habilitation, and
          adult day services. We work diligently in the execution of
          individualized plans to help our consumers lead full, rewarding lives.
          Creative Living Services is committed to excellence, and we invite you
          to learn more about our company, staff, and the individuals we
          support!
        </Text>
        <Text>
          Creative Living Services Operates under a Peopled Centered Philosophy,
          and as an organization, our first commitment is to the people we
          serve. We respect and value their choices, perspectives, opinions, and
          dreams. Within our company, we recognize our similarities while
          celebrating our differences. We understand the needs of those we
          serve, and we provide necessary assistance toward purposeful outcomes.
          We give back to our community rather than take from it. Most
          importantly, Creative Living Services is a places everyone can feel at
          home!
        </Text>
      </Container>
    </>
  );
}
