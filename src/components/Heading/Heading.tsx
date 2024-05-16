import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Heading({
  children,
  ...props
}: HeadingProps & { children: React.ReactNode }) {
  return (
    <ChakraHeading fontFamily={montserrat.style.fontFamily} {...props}>
      {children}
    </ChakraHeading>
  );
}
