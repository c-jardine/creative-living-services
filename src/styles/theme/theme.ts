import { extendTheme } from "@chakra-ui/react";
import { buttonTheme, linkTheme } from "./components";

const theme = extendTheme({
  components: {
    Button: buttonTheme,
    Link: linkTheme,
  },
});

export default theme;
