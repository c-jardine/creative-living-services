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
import { differenceInYears, format } from "date-fns";
import * as React from "react";
import { JobApplicationType } from "./types";

export const JobApplicationEmailTemplate = ({
  personalDetails,
  contactInfo,
  additionalInfo,
  employmentHistory,
  educationHistory,
  certifications,
}: JobApplicationType) => {
  return (
    <Html>
      <Head />
      <Preview>
        {personalDetails.firstName} {personalDetails.lastName} submitted a job
        application.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={global.defaultPadding}>
            <Text style={{ ...global.paragraphWithBold, fontSize: 32 }}>
              {personalDetails.firstName} {personalDetails.middleInitial}{" "}
              {personalDetails.lastName}
            </Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              Birthday:{" "}
              {format(new Date(personalDetails.birthday), "MM/dd/yyyy")} (
              {differenceInYears(
                new Date(),
                new Date(personalDetails.birthday)
              )}{" "}
              years old)
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
            <Text style={global.paragraphWithBold}>Address</Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              {contactInfo.addressLine1},{" "}
              {contactInfo.addressLine2 && `${contactInfo.addressLine2}, `}
              {contactInfo.city}, {contactInfo.state} {contactInfo.zipCode}
            </Text>
            <Text style={global.paragraphWithBold}>Email</Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              {contactInfo.email}
            </Text>
            <Text style={global.paragraphWithBold}>Phone</Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              {contactInfo.phone}
            </Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              {contactInfo.additionalPhone}
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={innerContainer.container}>
            <Text style={{ ...global.paragraphWithBold, fontSize: 18 }}>
              Additional info
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Text style={global.paragraphWithBold}>
              Driver&apos;s license number
            </Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              {additionalInfo.driversLicense}
            </Text>
            <Text style={global.paragraphWithBold}>Is a felon?</Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              {additionalInfo.isFelon}
            </Text>
            <Text style={global.paragraphWithBold}>Is authorized to work?</Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              {additionalInfo.isAuthorizedToWork}
            </Text>
            <Text style={global.paragraphWithBold}>
              Is willing to background check?
            </Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              {additionalInfo.isWillingToBackgroundCheck}
            </Text>
            <Text style={global.paragraphWithBold}>Is a former applicant?</Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              {additionalInfo.isFormerApplicant}
            </Text>
            <Text style={global.paragraphWithBold}>
              Is a driver with a car available?
            </Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              {additionalInfo.isDriver}
            </Text>
            <Text style={global.paragraphWithBold}>
              Has high school diploma or GED?
            </Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              {additionalInfo.isGraduate}
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={innerContainer.container}>
            <Text style={{ ...global.paragraphWithBold, fontSize: 18 }}>
              Employment history
            </Text>
          </Section>
          <Hr style={global.hr} />
          {employmentHistory.employmentHistory.map((emp, index) => (
            <>
              <Section key={index} style={global.defaultPadding}>
                <Text style={global.paragraphWithBold}>Position</Text>
                <Text style={{ ...global.text, fontSize: 14 }}>
                  {emp.position}
                </Text>
                <Row>
                  <Column style={{ width: "178px" }}>
                    <Text style={global.paragraphWithBold}>Company</Text>
                    <Text style={{ ...global.text, fontSize: 14 }}>
                      {emp.company}
                    </Text>
                  </Column>
                  <Column>
                    <Text style={global.paragraphWithBold}>Location</Text>
                    <Text style={{ ...global.text, fontSize: 14 }}>
                      {emp.address}, {emp.city}, {emp.state} {emp.zipCode}
                    </Text>
                  </Column>
                </Row>
                <Row>
                  <Column style={{ width: "178px" }}>
                    <Text style={global.paragraphWithBold}>Phone</Text>
                    <Text style={{ ...global.text, fontSize: 14 }}>
                      {emp.phone}
                    </Text>
                  </Column>
                  <Column>
                    <Text style={global.paragraphWithBold}>Supervisor</Text>
                    <Text style={{ ...global.text, fontSize: 14 }}>
                      {emp.supervisorName} ({emp.supervisorNumber})
                    </Text>
                  </Column>
                </Row>
                <Text style={global.paragraphWithBold}>Dates</Text>
                <Text style={{ ...global.text, fontSize: 14 }}>
                  {format(new Date(emp.startDate), "MM/dd/yyyy")} -{" "}
                  {format(new Date(emp.endDate), "MM/dd/yyyy")}
                </Text>
                <Row>
                  <Column>
                    <Text style={global.paragraphWithBold}>Salary</Text>
                    <Text style={{ ...global.text, fontSize: 14 }}>
                      {emp.salary}
                    </Text>
                  </Column>
                  <Column>
                    <Text style={global.paragraphWithBold}>Average hours</Text>
                    <Text style={{ ...global.text, fontSize: 14 }}>
                      {emp.weeklyHours} /wk
                    </Text>
                  </Column>
                </Row>
                <Text style={global.paragraphWithBold}>Duties</Text>
                <Text style={{ ...global.text, fontSize: 14 }}>
                  {emp.duties}
                </Text>
                <Text style={global.paragraphWithBold}>Reason for leaving</Text>
                <Text style={{ ...global.text, fontSize: 14 }}>
                  {emp.reasonForLeaving}
                </Text>
              </Section>
              <Hr style={global.hr} />
            </>
          ))}
          <Section style={innerContainer.container}>
            <Text style={{ ...global.paragraphWithBold, fontSize: 18 }}>
              Education history
            </Text>
          </Section>
          <Hr style={global.hr} />
          {educationHistory.educationHistory.map((edu, index) => (
            <>
              <Section key={index} style={global.defaultPadding}>
                <Row>
                  <Column>
                    <Text style={global.paragraphWithBold}>Name</Text>
                    <Text style={{ ...global.text, fontSize: 14 }}>
                      {edu.name}
                    </Text>
                    <Text style={global.paragraphWithBold}>Location</Text>
                    <Text style={{ ...global.text, fontSize: 14 }}>
                      {edu.city}, {edu.state}
                    </Text>
                  </Column>
                  <Column>
                    <Text style={global.paragraphWithBold}>Institution</Text>
                    <Text style={{ ...global.text, fontSize: 14 }}>
                      {edu.institution}
                    </Text>
                    <Text style={global.paragraphWithBold}>Is complete?</Text>
                    <Text style={{ ...global.text, fontSize: 14 }}>
                      {edu.isComplete}
                    </Text>
                  </Column>
                </Row>
                <Text style={global.paragraphWithBold}>Degree</Text>
                <Text style={{ ...global.text, fontSize: 14 }}>
                  {edu.degree}
                </Text>
              </Section>
              <Hr style={global.hr} />
            </>
          ))}
          <Section style={innerContainer.container}>
            <Text style={{ ...global.paragraphWithBold, fontSize: 18 }}>
              Certifications
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Row>
              <Column>
                <Text style={global.paragraphWithBold}>CPR</Text>
                <Text style={{ ...global.text, fontSize: 14 }}>
                  {certifications.hasCPR}
                </Text>
              </Column>
              <Column>
                <Text style={global.paragraphWithBold}>First Aid</Text>
                <Text style={{ ...global.text, fontSize: 14 }}>
                  {certifications.hasFirstAid}
                </Text>
              </Column>
              <Column>
                <Text style={global.paragraphWithBold}>
                  Oral/Topical Administration
                </Text>
                <Text style={{ ...global.text, fontSize: 14 }}>
                  {certifications.hasOralTopical}
                </Text>
              </Column>
            </Row>
            <Text style={global.paragraphWithBold}>Other</Text>
            {certifications.other && (
              <Text style={{ ...global.text, fontSize: 14 }}>
                {certifications.other}
              </Text>
            )}
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default JobApplicationEmailTemplate;

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
