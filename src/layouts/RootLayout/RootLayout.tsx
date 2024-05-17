import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Box, Stack } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Box
        as="main"
        bg="blue.50"
        py={16}
        _dark={{
          bg: "blue.950",
        }}
      >
        <Stack className={montserrat.className} spacing={16}>
          {children}
        </Stack>
      </Box>
      <Footer />
    </>
  );
}
