import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { buttonTheme, linkTheme } from "./components";

const theme = extendTheme({
  colors,
  components: {
    Button: buttonTheme,
    Link: linkTheme,
  },
});

export default theme;
