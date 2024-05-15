import { Box } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
import { AnnouncementBar } from "../AnnouncementBar";
import { ContactInfoBar } from "../ContactInfoBar";
import { Navbar } from "../Navbar";

const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Header() {
  return (
    <Box as="header" className={montserrat.className}>
      <AnnouncementBar />
      <ContactInfoBar />
      <Navbar />
    </Box>
  );
}
