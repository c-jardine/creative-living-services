import { Heading } from "@/components/Heading";
import { HeadMetadata } from "@/components/HeadMetadata";
import {
  Container,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function CareersPage() {
  return (
    <>
      <HeadMetadata
        title="Explore careers at Creative Living Services"
        description="Explore career opportunities at Creative Living Services, where you'll provide personalized care for individuals with developmental disabilities."
        canonical="/careers"
      />

      <Container as={Stack} spacing={8} maxW="container.md">
        <Stack>
          <Heading as="h1">Open positions</Heading>
          <Text>
            We&apos;re always accepting applications. They will be reviewed on
            an as-needed basis. When positions are available, qualified
            applicants will be contacted for interviews.
          </Text>
        </Stack>

        <Stack>
          <Heading as="h2" fontSize="xl">
            Direct Care Professional
          </Heading>
          <Text>Reports to: Team Leader or Supported Living Manager</Text>
        </Stack>

        <Link
          as={NextLink}
          href="/careers/apply"
          variant="navLinkOutline"
          w="fit-content"
        >
          Apply now
        </Link>

        <Stack>
          <Heading as="h3" fontSize="lg">
            Qualifications
          </Heading>
          <UnorderedList spacing={2} fontSize="sm">
            <ListItem>
              1 year of experience in a developmental disability field is{" "}
              <Text as="span" fontWeight="bold">
                preferred
              </Text>
              , but not required.
            </ListItem>
            <ListItem>
              American Red Cross First Aid and CPR Certification
            </ListItem>
            <ListItem>
              Level One Medication Administration Certification (may be acquired
              after hire, but before working with a client or passing
              medications)
            </ListItem>
            <ListItem>
              Eligibility to be employed and work in the United States of
              America.
            </ListItem>
            <ListItem>High school diploma or GED</ListItem>
            <ListItem>
              BCI/FBI background check and database inquiry validating
              employment eligibility.
            </ListItem>
            <ListItem>
              Valid driver&apos;s license with fewer than 6 points on current
              Official Driver Abstract.
            </ListItem>
            <ListItem>
              Current vehicle insurance that meets, or exceeds, the state
              minimum requirement.
            </ListItem>
            <ListItem>
              Physical ability to lift, lower, and maneuver up to 50 lbs.
            </ListItem>
            <ListItem>
              Availability for all shifts, including nights, weekends, and
              holidays.
            </ListItem>
          </UnorderedList>
        </Stack>

        <Stack>
          <Heading as="h3" fontSize="lg">
            Responsibilities
          </Heading>
          <UnorderedList spacing={2} fontSize="sm">
            <ListItem>
              Report for all scheduled shifts on time and ready to work.
            </ListItem>
            <ListItem>
              Comply with all applicable rules, regulations, laws, and Creative
              Living Services policies and procedures.
            </ListItem>
            <ListItem>
              Read, understand, and execute Individual Support Plans according
              to County Board and management direction in caring for each
              individual.
            </ListItem>
            <ListItem>
              Support each individual with housekeeping, personal hygiene, meal
              preparation, and any other support directed in the ISP according
              to County Board and company standards, and provide additional
              supports as requested by each individual.
            </ListItem>
            <ListItem>
              Read, understand, and execute Behavior Support Plans, when
              applicable, according to County Board and management direction in
              caring for individuals.
            </ListItem>
            <ListItem>
              Assist each individual with their everyday challenges, and provide
              support during unexpected situations which may cause the
              individual anxiety or distress.
            </ListItem>
            <ListItem>
              Follow all documentation guidelines for services provided to
              individuals, supports and developments provided, medications
              administered, finances managed, and any other assistance provided
              as outlined by County Board or company procedures.
            </ListItem>
            <ListItem>
              Utilize your personal vehicle to transport individuals to and from
              work, recreational outings, shopping trips, or medical
              appointments as needed.
            </ListItem>
            <ListItem>
              Maintain standards of health and safety per County Board and
              company guidelines and provide first aid support for individuals,
              seeking professional attention when necessary.
            </ListItem>
            <ListItem>
              Effectively communicate all concerns, issues, and incidents which
              may, in any way, affect an individual or their support team.
            </ListItem>
            <ListItem>
              Follow company guidelines and Major Unusual Incident reporting
              protocol to respond to incidents adversely affecting the health
              and safety of individuals.
            </ListItem>
            <ListItem>
              Serve as an informal advocate for individuals by ensuring the
              protection of rights in all situations, and by assisting during
              medical appointments to ensure receipt of best possible care.
            </ListItem>
            <ListItem>
              Maintain trainings and certifications required for continued
              employment as outlined in the Creative Living Services Employee
              Handbook.
            </ListItem>
            <ListItem>
              Attend employee meetings and supplemental trainings when
              scheduled.
            </ListItem>
            <ListItem>
              Participate in the semiannual peer evaluation process as directed
              by management.
            </ListItem>
          </UnorderedList>
        </Stack>
        <Link
          as={NextLink}
          href="/careers/apply"
          variant="navLinkOutline"
          w="fit-content"
        >
          Apply now
        </Link>
      </Container>
    </>
  );
}
