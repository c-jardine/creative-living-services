import { Heading } from "@/components/Heading";
import { Container, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function AdsVhPage() {
  return (
    <>
      <Head>
        <title>Adult Day Services & Vocational Habilitation</title>
        <meta
          name="description"
          content="Providing homemaker care, transportation, vocational habilitation, and adult day services for individuals with cognitive or developmental disabilities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container as={Stack} spacing={8} maxW="container.md">
        <Stack>
          <Heading as="h1">
            Adult Day Services & Vocational Habilitation
          </Heading>
          <Text>
            Our Adult Day Services provides consumers with an opportunity to
            socialize, learn, and participate in activities that enhance their
            daily life. Vocational Habilitation provides these individuals with
            paid employment for services that give back to the community.
            Here&apos;s a little more about us...
          </Text>
          <Text>
            We are a small, but active, company that provides services to adults
            with developmental disabilities. Our team executes individualized
            support plans to improve the quality of life for those we serve.
          </Text>
          <Text>
            Our Adult Day Services and Vocational Habilitation programs provide
            paid employment and recreational activities for many of our
            consumers. The work they do contributes to the betterment of our
            community! Currently, our consumers make candles, perform document
            destruction, and offer cleaning services.
          </Text>
          <Text>
            Profit from these services pay the individuals performing the tasks,
            and help fund the recreational activities our Adult Day Services
            program offers. To make this all possible, we need support from you!
            With your candle order today, you&apos;re making a difference!
          </Text>
          <Text>
            We invite you to take advantage of our competitive rates for
            document destruction and cleaning as well! These services are
            supervised by trained staff, and we will make sure you&apos;re
            satisfied by the quality of our work.
          </Text>
          <Text>Please call or e-mail for more information!</Text>
        </Stack>
      </Container>
    </>
  );
}
