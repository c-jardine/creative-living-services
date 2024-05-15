import {
  Box,
  Container,
  HStack,
  Icon,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { Facebook, Mail, Phone } from "lucide-react";

export default function ContactInfoBar() {
  return (
    <Box display={{ base: "none", lg: "block" }} bg="blue.500">
      <Container maxW="container.2xl" px={8}>
        <HStack alignItems="center" justifyContent="space-between">
          <IconButton
            icon={
              <Icon
                as={Facebook}
                fill="#1877F2"
                stroke="transparent"
                _groupHover={{ fill: "white" }}
              />
            }
            aria-label="View Creative Living Services on Facebook (opens in new tab)."
            bg="white"
            borderLeftWidth={2}
            borderRightWidth={2}
            borderColor="white"
            rounded="none"
            role="group"
            _hover={{
              bg: "#1877F2",
            }}
          />

          <HStack alignItems="center" spacing={4}>
            <HStack>
              <Icon as={Phone} stroke="white" />
              <Link href="tel:+14197244690" color="white" fontSize="sm">
                (419) 724-4690
              </Link>
            </HStack>

            <HStack>
              <Icon as={Mail} stroke="white" />
              <Link
                href="mailto:creativelivingservice@gmail.com"
                color="white"
                fontSize="sm"
              >
                creativelivingservice@gmail.com
              </Link>
            </HStack>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
