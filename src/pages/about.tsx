import { Heading } from "@/components/Heading";
import {
  Avatar,
  Container,
  HStack,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Creative Living Services Services</title>
        <meta
          name="description"
          content="Providing homemaker care, transportation, vocational habilitation, and adult day services for individuals with cognitive or developmental disabilities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container as={Stack} spacing={8} maxW="container.md">
        <Stack>
          <Heading as="h1">Our Mission</Heading>
          <Text>
            The mission of Creative Living Services is to provide all
            individuals with the highest quality care available while
            maintaining individual dignity. We demonstrate this commitment by:
          </Text>
          <UnorderedList>
            <ListItem>
              Operating within a people centered philosophy. We believe shared
              humanity dictates the basis of the relationship between service
              provider and client, and that the client should take a central
              role in determining the care they receive;
            </ListItem>
            <ListItem>
              Employing committed staff, providing them with all necessary
              training to deliver the promises of Creative Living Services;
            </ListItem>
            <ListItem>
              Promoting a work environment that embraces both similarities and
              differences, respects individuality, and promotes personal and
              professional growth;
            </ListItem>
            <ListItem>
              Developing relationships with community partners, health care
              professionals, and other resources to enhance the life experiences
              of our clients; and
            </ListItem>
            <ListItem>
              Demonstrating social responsibility by giving back to our
              community.
            </ListItem>
          </UnorderedList>
          <Heading as="h2">Our Team</Heading>
          <SimpleGrid columns={{ base: 1, sm: 2 }}>
            <HStack>
              <Avatar src="/images/amy-thompson.jpg" size='lg' />
              <Stack spacing={0}>
                <Text fontWeight="bold">Amy Thompson</Text>
                <Text fontSize="sm" color="gray.600">
                  CEO/Director
                </Text>
              </Stack>
            </HStack>
            <HStack>
              <Avatar src="/images/ashley-taylor.jpg" size='lg' />
              <Stack spacing={0}>
                <Text fontWeight="bold">Ashley Taylor</Text>
                <Text fontSize="sm" color="gray.600">
                  Assistant Director
                </Text>
              </Stack>
            </HStack>
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
