import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  borderWidth: 2,
  borderColor: "blue.500",
  _hover: {
    borderWidth: 2,
    bg: "blue.500",
    color: "white",
  },
});

const buttonTheme = defineStyleConfig({
  variants: {
    outline,
  },
});

export default buttonTheme;
