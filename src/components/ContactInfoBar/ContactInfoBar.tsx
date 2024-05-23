import {
  Box,
  Container,
  HStack,
  Icon,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";

export default function ContactInfoBar() {
  return (
    <Box display={{ base: "none", lg: "block" }} bg="blue.950">
      <Container maxW="1920px" px={8}>
        <HStack alignItems="center" justifyContent="space-between">
          <IconButton
            icon={
              <Icon
                as={FaFacebook}
                color="blue.50"
                stroke="transparent"
                _groupHover={{ fill: "white" }}
              />
            }
            aria-label="View Creative Living Services on Facebook (opens in new tab)."
            bg="blue.950"
            rounded="none"
            role="group"
            _hover={{
              bg: "blue.600",
            }}
          />

          <HStack alignItems="center" spacing={8}>
            <HStack>
              <Icon as={FaPhone} color="blue.200" />
              <Link href="tel:+14197244690" color="blue.50" fontSize="sm">
                (419) 724-4690
              </Link>
            </HStack>

            <HStack>
              <Icon as={FaEnvelope} color="blue.200" />
              <Link
                href="mailto:creativelivingservice@gmail.com"
                color="blue.50"
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
