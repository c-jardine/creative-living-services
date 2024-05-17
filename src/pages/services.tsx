import { Heading } from "@/components/Heading";
import { SplitImageBlock } from "@/components/SplitImageBlock";
import {
  Box,
  Container,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services for developmental or cognitive disabilities</title>
        <meta
          name="description"
          content="Our services support individuals with developmental or cognitive disabilities in achieving greater independence and enhancing their quality of life."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack spacing={16}>
        <Container as={Stack} maxW="container.md">
          <Heading as="h1">
            Services for individuals with developmental or cognitive
            disabilities
          </Heading>
          <Text>
            Based in Toledo, OH, our comprehensive range of services is designed
            to support individuals with developmental or cognitive disabilities
            in achieving greater independence and improving their quality of
            life. We provide tailored assistance to meet each person&apos;s
            unique needs, ensuring they have access to the resources and care
            necessary for their well-being and personal growth.
          </Text>
        </Container>

        <Container
          as={Stack}
          position="relative"
          spacing={16}
          maxW="container.xl"
        >
          <SplitImageBlock imgSrc="/images/home-care.jpg">
            <Heading as="h2" mt={4} fontSize="2xl" color="blue.900">
              Homemaker Personal Care Services
            </Heading>
            <Text color="blue.800">
              Our Homemaker Personal Care Services include assisting individuals
              with activities of daily living such as personal hygiene,
              dressing, feeding, and mobility needs. We focus on skills
              development to promote independence. These services can be
              provided through State, County, and/or Medicaid funding.
            </Text>
          </SplitImageBlock>

          <SplitImageBlock imgSrc="/images/transportation.jpg" flip>
            <Heading as="h2" mt={4} fontSize="2xl" color="blue.900">
              Medical and Non-Medical Transportation
            </Heading>
            <Text color="blue.800">
              We offer transportation services to ensure waiver enrollees can
              access essential programs such as adult day support, vocational
              habilitation, supported employment enclave, and community
              services. Our transportation services are designed to be reliable
              and convenient, helping individuals reach their destinations
              safely.
            </Text>
          </SplitImageBlock>

          <SplitImageBlock
            imgSrc="/images/day-services.jpg"
            contentProps={{ shadow: "lg" }}
            imgProps={{ shadow: "lg" }}
          >
            <Heading as="h2" mt={4} fontSize="2xl" color="blue.900">
              Adult Day Services
            </Heading>
            <Text color="blue.800">
              Our Adult Day Services are provided separately from any home or
              residential facility, focusing on non-work activities that enhance
              personal development and social interaction. We strive to create
              an engaging and supportive environment where individuals can
              participate in various activities that promote cognitive and
              emotional well-being, as well as fostering a sense of community
              and belonging. We help individuals build confidence, improve their
              social skills, and enjoy a fulfilling daily routine.
            </Text>
          </SplitImageBlock>
        </Container>

        <Box
          borderTopWidth={2}
          borderBottomWidth={2}
          borderColor="blue.200"
          mt={-32}
          pt={32}
          pb={16}
          px={4}
          bg="blue.600"
          shadow="lg"
        >
          <Container maxW="1920px">
            <SimpleGrid columns={{ base: 1, md: 2, xl: 5 }} spacing={8}>
              <Stack gridColumn={{ md: "1", xl: "1" }}>
                <Heading as="h4" fontSize="lg" color="blue.50">
                  Assessment
                </Heading>
                <Text fontSize="sm" color="blue.100">
                  Assessment can be formal or informal and is conducted for the
                  purpose of developing an Individual Service Plan (ISP).
                </Text>
              </Stack>
              <Stack gridColumn={{ md: "2", xl: "2" }}>
                <Heading as="h4" fontSize="lg" color="blue.50">
                  Personal Care
                </Heading>
                <Text fontSize="sm" color="blue.100">
                  Personal care services include assistance with personal
                  hygiene, eating, communication, mobility, toileting, and
                  dressing.
                </Text>
              </Stack>
              <Stack gridColumn={{ md: "1 / span 2", xl: "3" }}>
                <Heading as="h4" fontSize="lg" color="blue.50">
                  Skill Reinforcement
                </Heading>
                <Text fontSize="sm" color="blue.100">
                  Skill reinforcement involves implementing behavioral
                  intervention plans and providing help with the use of
                  communication and mobility devices.
                </Text>
              </Stack>
              <Stack gridColumn={{ md: "1 / span 2", xl: "4" }}>
                <Heading as="h4" fontSize="lg" color="blue.50">
                  Training in Self-Determination
                </Heading>
                <Text fontSize="sm" color="blue.100">
                  Training in self-determination includes developing
                  self-advocacy skills and acquiring abilities that enable
                  individuals to become more independent.
                </Text>
              </Stack>
              <Stack gridColumn={{ md: "1 / span 2", xl: "5" }}>
                <Heading as="h4" fontSize="lg" color="blue.50">
                  Recreation and Leisure
                </Heading>
                <Text fontSize="sm" color="blue.100">
                  Recreation and leisure activities include therapeutic supports
                  identified in the ISP that help to develop and maintain social
                  relationships and family contacts.
                </Text>
              </Stack>

              <Stack
                gridColumn={{ md: "1 / span 2", xl: "1 / span 5" }}
                alignItems="center"
              >
                <Link
                  as={NextLink}
                  href="/ads-vh"
                  variant="outline"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  Adult day services <Icon as={FaChevronRight} />
                </Link>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>

        <Container as={Stack} maxW="container.md"></Container>

        <Box>
          <Container maxW="container.lg">
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              gap={{ base: 8, sm: 16 }}
              position="relative"
            >
              <Box
                rounded="2xl"
                bgImg="url('/images/supported-employment.jpg')"
                bgSize="cover"
                bgPosition="right"
                minH={{ base: 72, md: "39rem" }}
              />
              <Stack>
                <Heading as="h1">Supported employment services</Heading>
                <Text color="gray.700">
                  Supported employment services offer intensive, ongoing support
                  to help individuals perform work in regular employment
                  settings, including self-employment. These services are
                  designed to ensure sustained success and integration in the
                  workplace, providing tailored assistance that addresses each
                  individual&apos;s unique strengths and challenges. By offering
                  comprehensive support, we help individuals develop the skills
                  and confidence needed to thrive in their chosen employment
                  environment.
                </Text>
              </Stack>
            </SimpleGrid>
          </Container>

          <Container
            as={Box}
            mt={{ base: 8, lg: -64 }}
            py={{ base: 0, lg: 16 }}
            rounded={{ base: "none", lg: "2xl" }}
            bg={{ lg: "blue.100" }}
            maxW="container.xl"
          >
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 8, sm: 16 }}>
              <Stack gridColumn={{ lg: "2" }} spacing={8}>
                <Stack>
                  <Heading as="h4" fontSize="lg" color={{ lg: "blue.900" }}>
                    Enclave
                  </Heading>
                  <Text
                    fontSize="sm"
                    color={{ base: "gray.700", lg: "blue.800" }}
                  >
                    Individuals work as a team at a single work-site (community
                    business or industry) with continuous on-site support
                    provided by the staff.
                  </Text>
                </Stack>

                <Stack>
                  <Heading as="h4" fontSize="lg" color={{ lg: "blue.900" }}>
                    Community
                  </Heading>
                  <Text
                    fontSize="sm"
                    color={{ base: "gray.700", lg: "blue.800" }}
                  >
                    Individuals work in integrated community work settings
                    alongside employees without disabilities, performing the
                    same or similar tasks.
                  </Text>
                </Stack>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>

        {/* <Container
          as={Stack}
          position="relative"
          spacing={16}
          maxW="container.xl"
        >
          <SplitImageBlock
            imgSrc="/images/supported-employment.jpg"
            flip
            contentProps={{
              shadow: { md: "lg" },
            }}
            imgProps={{
              bgPosition: "right",
              shadow: { md: "lg" },
            }}
          >
            <Heading as="h2" mt={4} fontSize="2xl" color="blue.900">
              Supported Employment Services
            </Heading>
            <Text color="blue.800">
              Supported employment services offer intensive, ongoing support to
              help individuals perform work in regular employment settings,
              including self-employment. These services are designed to ensure
              sustained success and integration in the workplace, providing
              tailored assistance that addresses each individual&apos;s unique
              strengths and challenges. By offering comprehensive support, we
              help individuals develop the skills and confidence needed to
              thrive in their chosen employment environment.
            </Text>
          </SplitImageBlock>
        </Container>

        <Box
          borderTopWidth={2}
          borderBottomWidth={2}
          borderColor="blue.200"
          mt={-32}
          pt={32}
          pb={16}
          px={4}
          bg="blue.600"
          shadow="lg"
        >
          <Container maxW="container.md">
            <SimpleGrid columns={{ md: 2 }} spacing={8}>
              <Stack>
                <Heading as="h4" fontSize="lg" color="blue.100">
                  Enclave
                </Heading>
                <Text fontSize="sm" color="blue.100">
                  Individuals work as a team at a single work-site (community
                  business or industry) with continuous on-site support provided
                  by the staff.
                </Text>
              </Stack>

              <Stack>
                <Heading as="h4" fontSize="lg" color={"blue.100"}>
                  Community
                </Heading>
                <Text fontSize="sm" color="blue.100">
                  Individuals work in integrated community work settings
                  alongside employees without disabilities, performing the same
                  or similar tasks.
                </Text>
              </Stack>

              <Stack alignItems="center" gridColumn={{ md: "1 / span 2" }}>
                <Link
                  as={NextLink}
                  href="/ads-vh"
                  variant="outline"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  Employment services <Icon as={FaChevronRight} />
                </Link>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box> */}
      </Stack>
    </>
  );
}
