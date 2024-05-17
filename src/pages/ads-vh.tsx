import { Heading } from "@/components/Heading";
import { SplitImageBlock } from "@/components/SplitImageBlock";
import {
  Container,
  HStack,
  Icon,
  Link,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { PiBroomFill } from "react-icons/pi";
import { RiCandleFill, RiFileShredFill } from "react-icons/ri";

export default function AdsVhPage() {
  return (
    <>
      <Head>
        <title>
          Adult day services and vocational habilitation | Creative Living
          Services
        </title>
        <meta
          name="description"
          content="Discover our Adult Day Services and Vocational Habilitation programs offering paid employment and activities for adults with developmental disabilities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/ads-vh`}
        />
      </Head>

      <Stack spacing={16}>
        <Container as={Stack} maxW="container.md">
          <Heading as="h1">
            Empowering Adults with Developmental Disabilities through Adult Day
            Services and Vocational Habilitation
          </Heading>
          <Text color="gray.600">
            Our Adult Day Services provide a nurturing environment where adults
            with developmental disabilities can socialize, learn, and engage in
            activities that enhance their daily lives. Through our Vocational
            Habilitation program, participants gain meaningful, paid employment
            opportunities that benefit both themselves and the community.
          </Text>
        </Container>

        <Container
          as={Stack}
          position="relative"
          spacing={16}
          maxW="container.xl"
        >
          <SplitImageBlock imgSrc="/images/candle-making.jpg">
            <Heading as="h2" mt={4} fontSize="2xl" color="blue.900">
              Vocational Habilitation
            </Heading>

            <Stack>
              <Text>
                Our programs not only offer recreational activities but also
                involve our consumers in productive work that contributes to the
                community. Currently, our participants are engaged in:
              </Text>
              <HStack mt={4} alignItems="flex-start">
                <Square bg="blue.600" size={16} rounded="2xl">
                  <Icon as={RiCandleFill} color="white" boxSize={5} />
                </Square>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="bold">
                    Candle-making
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Crafting beautiful candles available for purchase.
                  </Text>
                </Stack>
              </HStack>
              <HStack alignItems="flex-start">
                <Square bg="blue.600" size={16} rounded="2xl">
                  <Icon as={RiFileShredFill} color="white" boxSize={5} />
                </Square>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="bold">
                    Document destruction
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Providing secure and reliable document shredding services.
                  </Text>
                </Stack>
              </HStack>
              <HStack alignItems="flex-start">
                <Square bg="blue.600" size={16} rounded="2xl">
                  <Icon as={PiBroomFill} color="white" boxSize={5} />
                </Square>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="bold">
                    Cleaning
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Offering professional cleaning services for homes and
                    businesses.
                  </Text>
                </Stack>
              </HStack>
            </Stack>
          </SplitImageBlock>

          <SplitImageBlock
            imgSrc="/images/paying.jpg"
            flip
            imgProps={{
              bgPosition: "50% 30%",
              bgSize: "cover",
            }}
          >
            <Heading as="h2" mt={4} fontSize="2xl" color="blue.900">
              How You Can Support Us
            </Heading>
            <Text>
              The revenue generated from these activities directly supports the
              individuals performing the tasks and funds the recreational
              activities in our Adult Day Services program. Your support is
              crucial in sustaining these initiatives. By purchasing our
              candles, or utilizing our document destruction and cleaning
              services, you are making a significant impact on the lives of our
              participants.
            </Text>
          </SplitImageBlock>

          <Container as={Stack} maxW="container.md">
            <Heading as="h3">Want to make an impact?</Heading>
            <Text color="gray.600">
              We invite you to experience our competitive rates and exceptional
              service quality, all supervised by our trained staff to ensure
              your complete satisfaction.
            </Text>
            <Link
              as={NextLink}
              href="/contact"
              variant="navLinkOutline"
              mt={8}
              display="flex"
              alignItems="center"
              gap={2}
              w="fit-content"
              alignSelf="center"
            >
              Contact us
              <Icon as={FaChevronRight} />
            </Link>
          </Container>
        </Container>
      </Stack>
    </>
  );
}
