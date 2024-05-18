import { Heading } from "@/components/Heading";
import { HeadMetadata } from "@/components/HeadMetadata";
import {
  Avatar,
  Container,
  HStack,
  Image,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <>
      <HeadMetadata
        title="Learn more about us | Creative Living Services"
        description="Creative Living Services is dedicated to improving lives through personalized care, committed staff, and community partnerships."
        canonical="/about"
      />

      <Stack spacing={16}>
        <Container as={Stack} maxW="container.md">
          <Heading as="h1">
            Creative Living Services is dedicated to enhancing quality of life
          </Heading>
          <Text color="gray.600">
            We are a small but active organization dedicated to improving the
            quality of life for the individuals we serve. Our team diligently
            executes individualized support plans tailored to each person&apos;s
            needs and aspirations.
          </Text>
        </Container>

        <SimpleGrid
          as={Container}
          maxW="container.xl"
          columns={{ base: 1, lg: 5 }}
          gap={{ base: 8, sm: 16 }}
        >
          <Stack gridColumn={{ lg: "1 / span 3" }}>
            <Heading as="h2">Our Mission</Heading>
            <Text>
              The mission of Creative Living Services is to provide all
              individuals with the highest quality care available while
              maintaining individual dignity. We demonstrate this commitment by:
            </Text>
            <UnorderedList spacing={4}>
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
                professionals, and other resources to enhance the life
                experiences of our clients; and
              </ListItem>
              <ListItem>
                Demonstrating social responsibility by giving back to our
                community.
              </ListItem>
            </UnorderedList>
          </Stack>

          <Stack
            position="relative"
            gridColumn={{ lg: "4 / span 2" }}
            p={{ base: 4, sm: 8 }}
            rounded="2xl"
            bg="white"
            h="fit-content"
            overflow="hidden"
          >
            <Image
              display={{ base: "none", md: "block" }}
              src="/graphics/squares.png"
              alt="Squares graphic"
              position="absolute"
              top={10}
              right={-12}
              w="50%"
              transform="rotate(-90deg)"
            />
            <Stack position="relative">
              <Heading as="h2">Our Team</Heading>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 1 }} spacing={8}>
                <HStack>
                  <Avatar
                    src="/images/amy-thompson.jpg"
                    name="Amy Thompson, CEO/Director"
                    size="lg"
                  />
                  <Stack spacing={0}>
                    <Text fontWeight="bold">Amy Thompson</Text>
                    <Text fontSize="sm" color="gray.600">
                      CEO/Director
                    </Text>
                  </Stack>
                </HStack>
                <HStack>
                  <Avatar
                    src="/images/ashley-taylor.jpg"
                    name="Ashley Taylor, Assistant Director"
                    size="lg"
                  />
                  <Stack spacing={0}>
                    <Text fontWeight="bold">Ashley Taylor</Text>
                    <Text fontSize="sm" color="gray.600">
                      Assistant Director
                    </Text>
                  </Stack>
                </HStack>
              </SimpleGrid>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Stack>
    </>
  );
}
