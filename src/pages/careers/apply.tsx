import { Heading } from "@/components/Heading";
import { JobApplication } from "@/components/JobApplication";
import { Container, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function ApplyPage() {
  return (
    <>
      <Head>
        <title>Creative Living Services Job Application</title>
        <meta
          name="description"
          content="We're always accepting applications and will review them on an as-needed basis. When positions are available, qualified applicants will be contacted for interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/careers/apply`}
        />
      </Head>

      <Container as={Stack} spacing={8} maxW="container.md">
        <Stack>
          <Heading as="h1">Submit an application</Heading>
          <Text>
            We&apos;re always accepting applications. They will be reviewed on
            an as-needed basis. When positions are available, qualified
            applicants will be contacted for interviews.
          </Text>
        </Stack>

        <JobApplication />
      </Container>
    </>
  );
}
