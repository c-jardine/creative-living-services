import { ContactForm } from "@/components/ContactForm";
import { ContactInfoPanel } from "@/components/ContactInfoPanel";
import { LocationMap } from "@/components/LocationMap";
import { Box, Container, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Get in contact with us | Creative Living Services</title>
        <meta
          name="description"
          content="We want to know how we can serve you better. Feel free to message us about how we can help you, and we'll respond as quickly as possible."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box overflow="hidden">
        <Container as={Stack} spacing={16} maxW="container.xl">
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 16, lg: 32 }}
          >
            <Box px={{ base: 0, md: 8 }}>
              <ContactInfoPanel />
            </Box>
            <Box position="relative">
              <Stack
                position="relative"
                zIndex={1}
                p={{ base: 4, md: 8 }}
                spacing={4}
                rounded="2xl"
                bg="white"
              >
                <ContactForm />
              </Stack>
              <Image
                pointerEvents="none"
                src="/graphics/squares.png"
                alt="Graphic of squares"
                position="absolute"
                left={-32}
                bottom={16}
                transform="rotate(-90deg)"
                w={64}
              />
              <Image
                pointerEvents="none"
                src="/graphics/squares.png"
                alt="Graphic of squares"
                position="absolute"
                right={-32}
                top={16}
                transform="rotate(90deg)"
                w={64}
              />
            </Box>
          </SimpleGrid>
          <Box h={64} rounded="2xl" overflow="hidden">
            <LocationMap />
          </Box>
        </Container>
      </Box>
    </>
  );
}
