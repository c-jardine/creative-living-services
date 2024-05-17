import { Heading } from "@/components/Heading";
import { HeadMetadata } from "@/components/HeadMetadata";
import { JobApplication } from "@/components/JobApplication";
import { Container, Stack, Text } from "@chakra-ui/react";

export default function ApplyPage() {
  return (
    <>
      <HeadMetadata
        title="Creative Living Services Job Application"
        description="We're always accepting applications and will review them on an as-needed basis. When positions are available, qualified applicants will be contacted for interviews."
        canonical="/careers/apply"
      />

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
