import { Heading, HStack, Icon, Square, Stack, Text } from "@chakra-ui/react";
import { FaClock, FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa";

export default function ContactInfoPanel() {
  return (
    <Stack spacing={4}>
      <Heading as="h1">Contact us</Heading>
      <Text mt={-4} color="gray.600">
        We&apos;d love to hear from you.
      </Text>
      <Stack>
        <HStack alignItems="flex-start">
          <Square bg="blue.600" size={16} rounded="2xl">
            <Icon as={FaMapPin} color="white" boxSize={5} />
          </Square>
          <Stack spacing={0}>
            <Text fontSize="sm" fontWeight="bold">
              Location
            </Text>
            <Text fontSize="sm" color="gray.600">
              4757 N. Summit St.
            </Text>
            <Text fontSize="sm" color="gray.600">
              Toledo, OH 43611
            </Text>
          </Stack>
        </HStack>
      </Stack>

      <HStack alignItems="flex-start">
        <Square bg="blue.600" size={16} rounded="2xl">
          <Icon as={FaPhone} color="white" boxSize={5} />
        </Square>
        <Stack spacing={0}>
          <Text fontSize="sm" fontWeight="bold">
            Phone
          </Text>
          <Text fontSize="sm" color="gray.600">
            (419) 724-4690
          </Text>
        </Stack>
      </HStack>

      <HStack alignItems="flex-start">
        <Square bg="blue.600" size={16} rounded="2xl">
          <Icon as={FaEnvelope} color="white" boxSize={5} />
        </Square>
        <Stack spacing={0}>
          <Text fontSize="sm" fontWeight="bold">
            Email
          </Text>
          <Text fontSize="sm" color="gray.600">
            creativelivingservice@gmail.com
          </Text>
        </Stack>
      </HStack>

      <HStack alignItems="flex-start">
        <Square bg="blue.600" size={16} rounded="2xl">
          <Icon as={FaClock} color="white" boxSize={5} />
        </Square>
        <Stack spacing={0}>
          <Text fontSize="sm" fontWeight="bold">
            Hours
          </Text>
          <Text fontSize="sm" color="gray.600">
            <Text as="span" fontWeight="bold">
              Mon - Fri:
            </Text>{" "}
            9 am - 4 pm
          </Text>
          <Text fontSize="sm" color="gray.600">
            <Text as="span" fontWeight="bold">
              Sat - Sun:
            </Text>{" "}
            CLOSED
          </Text>
        </Stack>
      </HStack>
    </Stack>
  );
}
