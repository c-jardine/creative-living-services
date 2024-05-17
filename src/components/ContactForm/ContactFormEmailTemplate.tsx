import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { ContactFormType } from "./types";

export default function ContactFormEmailTemplate({
  name,
  email,
  phone,
  message,
}: ContactFormType) {
  return (
    <Html>
      <Head />
      <Preview>{name} sent a message.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={global.defaultPadding}>
            <Text style={{ ...global.paragraphWithBold, fontSize: 32 }}>
              {name}
            </Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              General inquiry
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={innerContainer.container}>
            <Text style={{ ...global.paragraphWithBold, fontSize: 18 }}>
              Contact info
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Row>
              <Column>
                <Text style={global.paragraphWithBold}>Email</Text>
                <Text style={{ ...global.text, fontSize: 14 }}>{email}</Text>
              </Column>
              <Column>
                <Text style={global.paragraphWithBold}>Phone number</Text>
                <Text style={{ ...global.text, fontSize: 14 }}>{phone}</Text>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />
          <Section style={innerContainer.container}>
            <Text style={{ ...global.paragraphWithBold, fontSize: 18 }}>
              Message
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Text style={{ ...global.text, fontSize: 14 }}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

const paragraph = {
  margin: "0",
  lineHeight: "2",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: "bold" },
  heading: {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "-1px",
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: "#747474",
    fontWeight: "500",
    lineHeight: 1,
  },
  button: {
    border: "1px solid #929292",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
    color: "#000",
  } as React.CSSProperties,
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
};

const innerContainer = {
  container: {
    padding: "12px 40px",
    backgroundColor: "#F7F7F7",
  },
  number: {
    margin: "12px 0 0 0",
    fontWeight: 500,
    lineHeight: "1.4",
    color: "#6F6F6F",
  },
};

const recomendationsText = {
  margin: "0",
  fontSize: "15px",
  lineHeight: "1",
  paddingLeft: "10px",
  paddingRight: "10px",
};
