import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const base = defineStyle({
  px: 4,
  py: 2,
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "wide",
  transition: "250ms ease-in-out",
  _hover: {
    textDecoration: "none",
  },
});

const navLink = defineStyle({
  ...base,
  px: 2,
  color: "gray.600",
  _hover: {
    ...base._hover,
    color: "blue.500",
  },
  _focus: {
    color: "blue.500",
  },
});

const navLinkOutline = defineStyle({
  ...base,
  px: 4,
  py: 2,
  borderWidth: "2px",
  borderColor: "blue.500",
  rounded: "lg",
  color: "blue.500",
  _hover: {
    ...base._hover,
    bg: "blue.500",
    color: "white",
  },
  _focus: {
    bg: "blue.500",
    color: "white",
  },
});

const outline = defineStyle({
  ...base,
  borderWidth: "2px",
  borderColor: "white",
  rounded: "lg",
  color: "white",
  _hover: {
    ...base._hover,
    bg: "white",
    color: "blue.500",
  },
  _focus: {
    bg: "white",
    color: "blue.500",
  },
});

const linkTheme = defineStyleConfig({
  variants: { navLink, navLinkOutline, outline },
});

export default linkTheme;
